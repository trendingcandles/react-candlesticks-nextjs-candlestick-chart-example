'use client';

import { useState } from 'react';
import {
  Candlesticks,
  Chart,
  Panel,
  SMA,
  Stochastic,
  VolumeBars,
  exampleData,
} from 'react-candlesticks';

type ChartTheme = 'light' | 'dark';

export default function CandlestickChart() {
  const [theme, setTheme] = useState<ChartTheme>('light');
  const [showVolume, setShowVolume] = useState(true);
  const [showIndicators, setShowIndicators] = useState(true);

  const latest = exampleData[exampleData.length - 1];
  const previous = exampleData[exampleData.length - 2];
  const change = latest.close - previous.close;
  const changePercent = (change / previous.close) * 100;

  return (
    <div className={`chart-card chart-card--${theme}`}>
      <div className="chart-toolbar">
        <div>
          <span className="chart-symbol">TSLA</span>
          <span className={change >= 0 ? 'change change--up' : 'change change--down'}>
            {change >= 0 ? '+' : ''}
            {change.toFixed(2)} ({changePercent.toFixed(2)}%)
          </span>
        </div>

        <div className="chart-actions" aria-label="Chart controls">
          <button
            type="button"
            className={theme === 'dark' ? 'is-active' : ''}
            onClick={() => setTheme('dark')}
          >
            Dark
          </button>
          <button
            type="button"
            className={theme === 'light' ? 'is-active' : ''}
            onClick={() => setTheme('light')}
          >
            Light
          </button>
          <label>
            <input
              type="checkbox"
              checked={showVolume}
              onChange={(event) => setShowVolume(event.target.checked)}
            />
            Volume
          </label>
          <label>
            <input
              type="checkbox"
              checked={showIndicators}
              onChange={(event) => setShowIndicators(event.target.checked)}
            />
            Indicators
          </label>
        </div>
      </div>

      <div className="chart-frame">
        <Chart
          data={exampleData}
          granularity="d1"
          initialScrollToLatest
          theme={theme}
        >
          <Panel heightRatio={3}>
            <Candlesticks />
            {showIndicators ? <SMA period={20} series={{ value: { color: '#777' }}}/> : null}
            {showIndicators ? <SMA period={50} /> : null}
          </Panel>
          {showVolume ? (
            <Panel>
              <VolumeBars />
            </Panel>
          ) : null}
          {showIndicators ? (
            <Panel>
              <Stochastic />
            </Panel>
          ) : null}
        </Chart>
      </div>
    </div>
  );
}
