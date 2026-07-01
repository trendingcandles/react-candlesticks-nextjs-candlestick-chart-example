import ChartLoader from './components/ChartLoader';

export default function Home() {
  return (
    <main className="page-shell">
      <section className="intro">
        <h1>React Candlestick Chart in Next.js</h1>
        <p>
          An interactive candlestick chart with volume, SMA overlays, and a
          Stochastic indicator, built for a Next.js trading dashboard.
        </p>
      </section>

      <section className="dashboard" aria-label="Trading chart">
        <ChartLoader />
      </section>
    </main>
  );
}
