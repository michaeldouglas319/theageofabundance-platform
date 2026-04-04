import { test, expect } from '@playwright/test';

test('studio gallery loads', async ({ page }) => {
  await page.goto('http://localhost:3002');
  await expect(page.getByTestId('gallery-grid')).toBeVisible();
});
