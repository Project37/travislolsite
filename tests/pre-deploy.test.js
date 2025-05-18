import { describe, it, expect, beforeAll } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

describe('Pre-deployment checks', () => {
  const publicDir = path.resolve('./public');
  const distDir = path.resolve('./dist');
  
  it('should have a CNAME file in public directory', () => {
    const cnameExists = fs.existsSync(path.join(publicDir, 'CNAME'));
    expect(cnameExists).toBe(true);
    
    if (cnameExists) {
      const cnameContent = fs.readFileSync(path.join(publicDir, 'CNAME'), 'utf8').trim();
      expect(cnameContent).toBeTruthy();
      expect(cnameContent).toMatch(/^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,}$/i);
    }
  });
  
  it('should have a .nojekyll file in public directory', () => {
    const nojekyllExists = fs.existsSync(path.join(publicDir, '.nojekyll'));
    expect(nojekyllExists).toBe(true);
  });
  
  // Ensure required social media information is present
  it('should have author information set', async () => {
    const { default: site } = await import('../src/config/site.js');
    expect(site.author).toBeDefined();
    expect(site.author.name).toBeTruthy();
    expect(site.author.email).toBeTruthy();
    
    // Check that at least one social media link is provided
    const hasSocialLinks = !!(
      site.author.linkedin || 
      site.author.github || 
      site.author.bluesky
    );
    expect(hasSocialLinks).toBe(true);
  });
  
  // Ensure SEO information is set
  it('should have SEO information configured', async () => {
    const { default: site } = await import('../src/config/site.js');
    expect(site.siteName).toBeTruthy();
    expect(site.siteDescription).toBeTruthy();
    expect(site.siteUrl).toBeTruthy();
    expect(site.ogImage).toBeTruthy();
  });
});
