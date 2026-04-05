'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Theme = 'dark' | 'light' | 'system';

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: 'dark' | 'light';
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({
  children,
  defaultTheme = 'dark',
  storageKey = 'void-theme',
}: {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const stored = localStorage.getItem(storageKey) as Theme | null;
    if (stored) setThemeState(stored);
  }, [storageKey]);

  useEffect(() => {
    const root = document.documentElement;
    const mq = window.matchMedia('(prefers-color-scheme: light)');

    const apply = (t: Theme) => {
      const resolved = t === 'system' ? (mq.matches ? 'light' : 'dark') : t;
      setResolvedTheme(resolved);
      root.setAttribute('data-theme', resolved);
    };

    apply(theme);
    const listener = () => { if (theme === 'system') apply('system'); };
    mq.addEventListener('change', listener);
    return () => mq.removeEventListener('change', listener);
  }, [theme]);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem(storageKey, t);
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>');
  return ctx;
}

/** Inline script to prevent flash of wrong theme — add to <head> before any CSS */
export const ThemeScript = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `
        try {
          var s = localStorage.getItem('void-theme') || 'dark';
          var r = s === 'system'
            ? (window.matchMedia('(prefers-color-scheme:light)').matches ? 'light' : 'dark')
            : s;
          document.documentElement.setAttribute('data-theme', r);
        } catch(e) {
          document.documentElement.setAttribute('data-theme', 'dark');
        }
      `,
    }}
  />
);
