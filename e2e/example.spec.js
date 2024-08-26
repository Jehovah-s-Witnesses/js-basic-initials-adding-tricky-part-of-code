import { test, expect } from '@playwright/test';
import { join } from 'path';

test('has title', async ({ page }) => {
  await page.goto(`file://${join(__dirname, '../src/index.html')}`);
  const element = await page.locator('.toast-body');

  expect(await element.innerText()).toBe('Hi all');
});
