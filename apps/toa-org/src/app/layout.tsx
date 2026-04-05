import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Age of Abundance · Foundation',
  description: 'Nonprofit research, open publishing, and advocacy for human flourishing at a global scale.',
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
