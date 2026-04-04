import { test, expect } from '@playwright/test';

test('pulse homepage loads', async ({ page }) => {
  await page.goto('http://localhost:3003');
  await expect(page.getByRole('main')).toBeVisible();
});
