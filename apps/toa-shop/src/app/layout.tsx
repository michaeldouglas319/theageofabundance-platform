import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Age of Abundance · Shop',
  description: 'Curated goods aligned with the abundant, conscious life — sourced from brands that share your values.',
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
