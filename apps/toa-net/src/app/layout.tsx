import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TOA Network — Connect with Abundance Seekers',
  description: 'A global community dedicated to growth and flourishing.',
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
