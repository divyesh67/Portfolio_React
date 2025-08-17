import { defineCollection, z } from 'astro:content';

export const collections = {
  blog: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      pubDate: z.coerce.date(),
      description: z.string().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      hero: z.string().optional()
    })
  }),
  project: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      summary: z.string(),
      date: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      cover: z.string().optional(),
      links: z.record(z.string()).optional()
    })
  }),
  about: defineCollection({ type: 'content' })
};
