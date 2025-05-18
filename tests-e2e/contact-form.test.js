import { test, expect } from '@playwright/test';

test('contact form validation works', async ({ page }) => {
  await page.goto('/#contact');
  
  // Get the form
  const contactForm = page.locator('form');
  const submitButton = page.getByRole('button', { name: /send|submit/i });
  
  // Try to submit the form without filling it out
  await submitButton.click();
  
  // Check for validation messages
  await expect(page.locator('form .error-message')).toBeVisible();
  
  // Fill out the form partially and check validation
  await page.getByLabel(/name/i).fill('Test User');
  await submitButton.click();
  
  // Should still show validation errors for other fields
  await expect(page.locator('form .error-message')).toBeVisible();
  
  // Fill out the form completely
  await page.getByLabel(/name/i).fill('Test User');
  await page.getByLabel(/email/i).fill('test@example.com');
  await page.getByLabel(/message/i).fill('This is a test message');
  
  // Submit button should be enabled
  await expect(submitButton).toBeEnabled();
});
