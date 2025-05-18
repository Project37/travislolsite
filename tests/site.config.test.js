import { describe, it, expect } from 'vitest';
import site from '../src/config/site.js';

describe('Site Configuration', () => {
  it('should have the correct site name', () => {
    expect(site.siteName).toBe('Security Professional Portfolio');
  });

  it('should have the correct site URL', () => {
    expect(site.siteUrl).toBe('http://travis.lol');
  });

  it('should have valid author information', () => {
    expect(site.author).toBeDefined();
    expect(site.author.name).toBe('Travis D\'Amico');
    expect(site.author.email).toBe('CyberSec@Travis.lol');
  });

  it('should have navigation items', () => {
    expect(site.navigation).toBeInstanceOf(Array);
    expect(site.navigation.length).toBeGreaterThan(0);
    
    // Check that each navigation item has required properties
    site.navigation.forEach(item => {
      expect(item).toHaveProperty('title');
      expect(item).toHaveProperty('url');
    });
  });

  it('should have theme configuration', () => {
    expect(site.themes).toBeInstanceOf(Array);
    expect(site.themes.length).toBeGreaterThan(0);
    
    // Check that at least one theme is marked as default
    const defaultTheme = site.themes.find(theme => theme.default === true);
    expect(defaultTheme).toBeDefined();
  });
});
