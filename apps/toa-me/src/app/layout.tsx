import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TOA Health — Your Wellness OS',
  description: 'Track and optimize every dimension of your health.',
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
