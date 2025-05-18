import { test, expect } from '@playwright/test';

test('blog index page loads correctly', async ({ page }) => {
  await page.goto('/blog/');
  
  // Check the title
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  
  // Check that blog posts are displayed
  const blogPosts = page.locator('article');
  await expect(blogPosts).toHaveCount.greaterThan(0);
});

test('blog post pages load correctly', async ({ page }) => {
  // First, go to the blog index to get a post link
  await page.goto('/blog/');
  
  // Click on the first blog post
  const firstPost = page.locator('article a').first();
  await firstPost.click();
  
  // Check that we're now on a blog post page
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  
  // Check for blog post content
  await expect(page.locator('article')).toBeVisible();
  
  // Check for navigation elements
  await expect(page.getByRole('link', { name: /blog/i })).toBeVisible();
});

test('blog tags work correctly', async ({ page }) => {
  await page.goto('/blog/');
  
  // Find and click on a tag
  const firstTag = page.locator('.tag').first();
  const tagText = await firstTag.textContent();
  await firstTag.click();
  
  // Check that we're now on a tag page
  await expect(page.url()).toContain('/tag/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText(tagText);
  
  // Check that filtered blog posts are displayed
  const blogPosts = page.locator('article');
  await expect(blogPosts).toHaveCount.greaterThan(0);
});
