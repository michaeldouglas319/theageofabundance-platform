import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'color-green': '#10b981',
        'color-gold': '#d4a574',
        'color-navy': '#1a2744',
        'color-purple': '#8b5cf6',
        'color-blue': '#3b82f6',
        'color-cyan': '#06b6d4',
        'color-indigo': '#4f46e5',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
        mono: ['Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
