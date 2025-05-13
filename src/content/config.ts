import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('Admin'),
    readingTime: z.string().default('5 minutes'),
    tags: z.array(z.string()).default(['Security']),
    isFeatured: z.boolean().default(false)
  })
});

export const collections = {
  'blog': blogCollection
};
