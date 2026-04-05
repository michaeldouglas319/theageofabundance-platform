import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Age of Abundance · Cloud',
  description: 'Enterprise infrastructure built for abundance builders — global edge, zero-config deploy, infinite scale.',
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
