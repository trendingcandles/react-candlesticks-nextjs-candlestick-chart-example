'use client';

import dynamic from 'next/dynamic';

const CandlestickChart = dynamic(() => import('./CandlestickChart'), {
  ssr: false,
  loading: () => <div className="chart-loading">Loading chart...</div>,
});

export default function ChartLoader() {
  return <CandlestickChart />;
}
