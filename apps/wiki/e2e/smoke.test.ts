import { test, expect } from '@playwright/test';

test('wiki homepage loads and shows search', async ({ page }) => {
  await page.goto('http://localhost:3001');
  await expect(page.getByRole('searchbox')).toBeVisible();
});
