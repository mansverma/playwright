const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://parabank.parasoft.com/parabank/index.htm';

test.describe('ParaBank Contact Form Submission', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('.contact').click();
    await page.waitForLoadState('domcontentloaded');
  });

  test('should successfully submit contact form with all fields filled', async ({ page }) => {
    // Generate unique test data
    const now = new Date();
    const timestamp = `${Date.now()}_${now.getHours()}${now.getMinutes()}${now.getSeconds()}`;
    
    const contactData = {
      name: `Test User ${timestamp}`,
      email: `testuser${timestamp}@example.com`,
      phone: '555-123-4567',
      message: `This is a test message submitted on ${now.toLocaleString()}. Testing contact form functionality with unique identifier: ${timestamp}`
    };

    // Fill out the contact form
    await page.fill('input[id="name"]', contactData.name);
    await page.fill('input[id="email"]', contactData.email);
    await page.fill('input[id="phone"]', contactData.phone);
    await page.fill('textarea[id="message"]', contactData.message);

    // Submit the form
    await page.click('input[value="Send to Customer Care"]');

    // Wait for form submission and verify success
    await page.waitForLoadState('networkidle');
    
    // Check for success message or confirmation
    const successMessage = page.locator('#rightPanel');
    await expect(successMessage).toBeVisible();
  });
  //test.describe('ParaBank Login Validation', () => {
  test('should show error when logging in without credentials', async ({ page }) => {
    await page.locator('input[type="submit"][value="Log In"]').click();
    //Wait for error message and verify it appears
    const errorMessage = page.locator('.error');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Please enter a username and password.');
  });
});
