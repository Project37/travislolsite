import { describe, it, expect } from 'vitest';
import expertise from '../src/config/expertise.js';
import projects from '../src/config/projects.js';

describe('Expertise Configuration', () => {
  it('should have valid expertise items', () => {
    expect(expertise).toBeInstanceOf(Array);
    expect(expertise.length).toBeGreaterThan(0);
    
    expertise.forEach(item => {
      expect(item).toHaveProperty('title');
      expect(item).toHaveProperty('description');
      expect(item).toHaveProperty('icon');
    });
  });
  
  it('should have unique expertise titles', () => {
    const titles = expertise.map(item => item.title);
    const uniqueTitles = [...new Set(titles)];
    expect(titles.length).toBe(uniqueTitles.length);
  });
});

describe('Projects Configuration', () => {
  it('should have valid project items', () => {
    expect(projects).toBeInstanceOf(Array);
    expect(projects.length).toBeGreaterThan(0);
    
    projects.forEach(project => {
      expect(project).toHaveProperty('title');
      expect(project).toHaveProperty('description');
      expect(project).toHaveProperty('tags');
      expect(project.tags).toBeInstanceOf(Array);
    });
  });
  
  it('should have unique project titles', () => {
    const titles = projects.map(project => project.title);
    const uniqueTitles = [...new Set(titles)];
    expect(titles.length).toBe(uniqueTitles.length);
  });
  
  it('should have valid URLs where provided', () => {
    projects.forEach(project => {
      if (project.url) {
        expect(project.url).toMatch(/^(http|https):\/\//);
      }
      
      if (project.sourceUrl) {
        expect(project.sourceUrl).toMatch(/^(http|https):\/\//);
      }
    });
  });
});
