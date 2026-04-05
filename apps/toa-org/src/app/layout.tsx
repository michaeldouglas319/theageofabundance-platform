import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TOA Foundation — Advancing Human Flourishing',
  description: 'A nonprofit at the frontier of human potential.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
        {children}
      </body>
    </html>
  );
}
