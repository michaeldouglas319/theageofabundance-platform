import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TOA Space — Build Without Limits',
  description: 'The AI-powered workspace for creators and teams.',
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
