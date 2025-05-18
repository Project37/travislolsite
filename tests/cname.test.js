import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import site from '../src/config/site.js';

describe('Custom domain configuration', () => {
  it('should have a CNAME file with correct domain', () => {
    const cnamePath = path.join(process.cwd(), 'public', 'CNAME');
    const cnameExists = fs.existsSync(cnamePath);
    expect(cnameExists).toBe(true);
    
    if (cnameExists) {
      const cnameContent = fs.readFileSync(cnamePath, 'utf8').trim();
      expect(cnameContent).toBe(site.siteUrl.replace(/^https?:\/\//, ''));
    }
  });
});
