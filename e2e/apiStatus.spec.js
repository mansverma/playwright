// @ts-check
const { test, expect } = require('@playwright/test');

test.skip('BrowserStack login should return 401 for invalid credentials', async ({ page }) => {
  // Go to sign in page
  await page.goto('https://www.browserstack.com/users/sign_in');

  // Fill login form fields
  await page.fill('input[name="user[login]"]', 'admintesting@gmail.com');
  await page.fill('input[name="user[password]"]', 'wrongpassword123');

  // Start waiting for the login request before clicking submit
  const [response] = await Promise.all([
    page.waitForResponse((resp) =>
      resp.url().includes('/users/sign_in') && resp.request().method() === 'POST'
    ),
    page.click('input[type="submit"][value="Sign me in"]'),
  ]);

  // Check the status code of API response
  const status = response.status();
  console.log('Login API Status:', status);

  // Assert it should be 403
  await expect(status).toBe(403);
});
