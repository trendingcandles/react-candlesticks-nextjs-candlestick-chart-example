import type { Metadata } from 'next';
import 'react-candlesticks/style.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js Candlestick Chart Example',
  description:
    'An interactive React candlestick chart for Next.js with volume, SMA overlays, and a Stochastic indicator.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
