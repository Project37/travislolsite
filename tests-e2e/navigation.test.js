import { test, expect } from '@playwright/test';
import site from '../src/config/site.js';

test('homepage has the correct title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(new RegExp(site.siteName));
});

test('navigation links work correctly', async ({ page }) => {
  await page.goto('/');
  
  // Check that all navigation links are present
  for (const navItem of site.navigation) {
    const linkLocator = page.getByRole('link', { name: navItem.title });
    await expect(linkLocator).toBeVisible();
  }
  
  // Check the blog link works
  const blogLink = page.getByRole('link', { name: 'Security Blog' });
  await blogLink.click();
  
  // Wait for navigation to complete and check we're on the blog page
  await page.waitForURL('**/blog/');
  await expect(page).toHaveURL(/.*\/blog\//);
});

test('theme switcher works', async ({ page }) => {
  await page.goto('/');
  
  // Find and click the theme switcher
  const themeSwitcher = page.getByRole('button', { name: /theme/i });
  await themeSwitcher.click();
  
  // Check if theme options are shown
  for (const theme of site.themes) {
    await expect(page.getByText(theme.name, { exact: true })).toBeVisible();
  }
});

test('contact form is functional', async ({ page }) => {
  await page.goto('/#contact');
  
  // Fill out the contact form
  await page.getByLabel(/name/i).fill('Test User');
  await page.getByLabel(/email/i).fill('test@example.com');
  await page.getByLabel(/message/i).fill('This is a test message');
  
  // We won't actually submit the form in the test to avoid sending real data,
  // but we can check the submit button is enabled
  const submitButton = page.getByRole('button', { name: /send/i });
  await expect(submitButton).toBeEnabled();
});
