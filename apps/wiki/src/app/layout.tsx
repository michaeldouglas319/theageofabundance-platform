import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TOA Wiki — The Abundance Encyclopedia',
  description: 'Open knowledge for human flourishing.',
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
