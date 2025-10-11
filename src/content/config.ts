import { defineCollection, z } from 'astro:content'

const formulas = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    latex: z.string(),
    relatedFormulas: z.array(z.string()).optional(),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
    dateAdded: z.date().optional(),
    lastUpdated: z.date().optional(),
    author: z.string().optional(),
    image: z.string().optional(),
    codeExample: z.string().optional(),
    references: z.array(z.string()).optional(),
  }),
})

export const collections = {
  formulas,
}
