import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('loads the starter page', async ({ page }) => {
  await expect(page).toHaveTitle(/Your Project/);
  await expect(
    page.getByRole('heading', {
      level: 1,
      name: 'Start with clarity, then make it unmistakably yours.'
    })
  ).toBeVisible();
  await expect(page.getByRole('navigation', { name: 'Primary navigation' })).toBeVisible();
});

test('has no horizontal overflow', async ({ page }) => {
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth
  );
  expect(overflow).toBe(false);
});

test('cycles explicit theme preferences', async ({ page }) => {
  const toggle = page.getByRole('button', { name: 'Theme preference: system' });
  await toggle.click();
  await expect(page.locator('html')).toHaveAttribute('data-theme-preference', 'light');
  await toggle.click();
  await expect(page.locator('html')).toHaveAttribute('data-theme-preference', 'dark');
});

test('has no serious or critical accessibility violations', async ({ page }) => {
  const results = await new AxeBuilder({ page }).analyze();
  const blocking = results.violations.filter((violation) =>
    ['serious', 'critical'].includes(violation.impact)
  );
  expect(blocking).toEqual([]);
});
