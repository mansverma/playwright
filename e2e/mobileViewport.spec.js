// @ts-check
const { test, expect, devices } = require('@playwright/test');

test.use({
  ...devices['iPhone 12'], // Run in a mobile viewport
});

test('Click Web Testing tab on BrowserStack mobile site', async ({ page }) => {
  // Navigate to BrowserStack
  await page.goto('https://www.browserstack.com/');

  // Click the "Web Testing" tab by role and accessible name
  await page.getByRole('tab', { name: 'Web Testing' }).click();

  // Optional: Verify that it became selected
  const webTestingTab = page.getByRole('tab', { name: 'Web Testing' });
  await expect(webTestingTab).toHaveAttribute('aria-selected', 'true');
});
