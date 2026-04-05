import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Age of Abundance · Agency',
  description: 'Deploy intelligent AI agents for any mission or workflow — pre-built, customizable, and enterprise-ready.',
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
