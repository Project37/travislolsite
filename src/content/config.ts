/**
 * Content Collections Configuration
 * 
 * This file defines the schemas for all content collections in the site.
 * Currently includes the blog collection for security articles.
 */
import { defineCollection, z } from 'astro:content';

/**
 * Security Blog Collection Schema
 * 
 * Defines the structure and validation rules for security blog posts.
 * All posts are stored as Markdown files in the src/content/blog directory.
 */
const blogCollection = defineCollection({
  schema: z.object({
    // Required fields
    title: z.string()
      .describe("The title of the security blog post"),
    
    description: z.string()
      .describe("A brief description for SEO and previews"),
    
    pubDate: z.date()
      .describe("Publication date of the article"),
    
    // Optional fields with defaults
    author: z.string()
      .default('Admin')
      .describe("Author of the article"),
    
    readingTime: z.string()
      .default('5 minutes')
      .describe("Estimated reading time"),
    
    tags: z.array(z.string())
      .default(['Security'])
      .describe("Categorization tags for the article"),
    
    isFeatured: z.boolean()
      .default(false)
      .describe("Whether this post should be featured on the homepage"),
    
    // Additional optional fields
    coverImage: z.string()
      .optional()
      .describe("Path to cover image for the article"),
    
    updateDate: z.date()
      .optional()
      .describe("Last update date if applicable"),
    // codebrackets
    bracketType: z.string()
      .optional()
      .describe("Type of code brackets used in the article"),
  })
});

export const collections = {
  'blog': blogCollection
};
