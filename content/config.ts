import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    blogTitle: z.string(),
    blogExcerpt: z.string(),
    publishDate: z.date(),
    modifiedDate: z.date().optional(),
    author: z.string().optional(),
    authorUrl: z.string().optional(),
    headerImage: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    keywords: z.array(z.string()).optional(),
    articleSection: z.string().optional(),
    wordCount: z.number().optional(),
    permalink: z.string().url().optional(),
    category: z.string(),
    cardCategory: z.string(),
    imageSrc: z.string(),
    imageAlt: z.string(),
  }),
});

export const collections = { blog };