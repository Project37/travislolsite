import { test, expect } from '@playwright/test';
import site from '../src/config/site.js';

test('theme switcher changes the theme', async ({ page }) => {
  await page.goto('/');
  
  // Look for data-theme attribute on the html element
  const htmlElement = page.locator('html');
  const initialTheme = await htmlElement.getAttribute('data-theme');
  
  // Find the theme select element with label
  const themeSelect = page.locator('#theme-select');
  
  // Get a theme value that is different from the current one
  const defaultTheme = site.themes.find(theme => theme.default)?.value || 'gruvbox';
  const differentTheme = site.themes.find(theme => theme.value !== initialTheme && theme.value !== 'system');
  
  if (differentTheme) {
    // Select the different theme
    await themeSelect.selectOption(differentTheme.value);
    
    // Check if the theme has changed
    await expect(async () => {
      const newTheme = await htmlElement.getAttribute('data-theme');
      expect(newTheme).not.toBe(initialTheme);
    }).toPass({ timeout: 5000 });
  }
});
