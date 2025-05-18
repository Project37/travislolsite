---
title: "Testing Strategy for Modern Web Projects"
description: "An in-depth look at our dual testing approach using Vitest for unit tests and Playwright for end-to-end tests"
pubDate: 2025-05-18
author: "Travis D'Amico"
readingTime: "8 minutes"
tags: ["Testing", "Development", "playwright", "vitest", "Automation" , "ai_slopped"]
bracketType: "code-review"
bracketColor: "blue"
bracketLabel: "testing.spec.js"
---

# Testing Strategy for Modern Web Projects

As modern web applications grow in complexity, robust testing becomes essential for maintaining quality and preventing regressions. In this post, I'll explain our dual testing approach that leverages the strengths of both unit testing with Vitest and end-to-end (E2E) testing with Playwright.

## Why Two Different Testing Frameworks?

You might ask - why use two separate testing frameworks instead of just one? The answer comes down to the testing pyramid concept. Different types of tests serve different purposes:

1. **Unit Tests** - Quick, focused tests of individual functions or components
2. **Integration Tests** - Tests of how components work together
3. **End-to-End Tests** - Tests that simulate real user behavior in a browser

Using specialized tools for different layers gives us the best of both worlds.

## Unit Testing with Vitest

[Vitest](https://vitest.dev/) is a blazing fast unit test framework powered by Vite. We use it primarily for testing JavaScript logic without needing a browser environment.

### What We Test with Vitest

In our repository, Vitest handles:

- **Configuration Validation** - Ensuring our configuration files have required fields and valid values
- **Content Structure** - Checking that our content objects follow expected patterns
- **Pre-Deployment Checks** - Verifying that necessary files exist before deploying

Here's a real example from our codebase that checks our site configuration:

```javascript
// From tests/site.config.test.js
describe('Site Configuration', () => {
  it('should have the correct site name', () => {
    expect(site.siteName).toBe('Security Professional Portfolio');
  });

  it('should have valid author information', () => {
    expect(site.author).toBeDefined();
    expect(site.author.name).toBe('Travis D\'Amico');
    expect(site.author.email).toBe('CyberSec@Travis.lol');
  });

  // More tests...
});
```

These tests run extremely fast and provide immediate feedback when something breaks.

### Running Unit Tests

To run our unit tests:

```bash
npm run test       # Run tests once
npm run test:watch # Run in watch mode (rerun on file changes)
```

## End-to-End Testing with Playwright

[Playwright](https://playwright.dev/) is a powerful browser automation tool by Microsoft that allows us to test our application as users would experience it - in actual browsers.

### What We Test with Playwright

Our E2E tests focus on:

- **Navigation** - Making sure links work and pages load correctly
- **Interactivity** - Testing interactive components like forms and toggles
- **Theme Switching** - Verifying that theme changes persist and display properly
- **Accessibility** - Automated accessibility checks using axe-core
- **Multi-Browser Compatibility** - Running tests across Chrome, Firefox, Safari, and mobile browsers

Here's an example of how we test the theme switcher:

```javascript
// From tests-e2e/theme-switcher.test.js
test('theme switcher changes the theme', async ({ page }) => {
  await page.goto('/');
  
  // Look for data-theme attribute on the html element
  const htmlElement = page.locator('html');
  const initialTheme = await htmlElement.getAttribute('data-theme');
  
  // Find and use the theme selector
  const themeSelect = page.locator('#theme-select');
  
  // Select a different theme
  const differentTheme = site.themes.find(theme => theme.value !== initialTheme);
  if (differentTheme) {
    await themeSelect.selectOption(differentTheme.value);
    
    // Verify the theme changed
    await expect(async () => {
      const newTheme = await htmlElement.getAttribute('data-theme');
      expect(newTheme).not.toBe(initialTheme);
    }).toPass({ timeout: 5000 });
  }
});
```

### Running E2E Tests

To run our end-to-end tests:

```bash
npm run test:e2e    # Run headless E2E tests
npm run test:e2e:ui # Run with UI mode for debugging
```

## Comprehensive Testing with Both Frameworks

For complete confidence before deployment, we run both test suites:

```bash
npm run test:all
```

This is also integrated into our deployment process:

```bash
npm run deploy  # Runs tests, builds the site, and deploys
```

## Why This Approach Works Well

This dual approach gives us several benefits:

1. **Speed** - Unit tests run in milliseconds, giving quick feedback during development
2. **Coverage** - E2E tests catch issues that only appear in real browsers
3. **Confidence** - Together, they provide comprehensive validation of our application
4. **Developer Experience** - The right tool for each testing need

## Conclusion

By leveraging both Vitest for unit testing and Playwright for end-to-end testing, we've created a robust testing strategy that catches issues early and ensures a quality experience for our users.

As the project grows, our test suite grows with it, providing a safety net for refactoring and new feature development. Testing might seem like extra work upfront, but it saves countless hours of debugging and firefighting later.

Have you implemented automated testing in your project? What approaches have worked well for you? Mine was ai sloppled, let me know if you see something wrong. Reach out below **soon**.
