import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  webServer: {
    command: 'pnpm start',
    port: 3003,
    reuseExistingServer: true,
  },
  use: {
    baseURL: 'http://localhost:3003',
  },
});
