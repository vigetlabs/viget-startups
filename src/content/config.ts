import { defineCollection, z } from 'astro:content'

const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    heading: z.string(),
    overline: z.string(),
    description: z.string(),
    kpis: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
      }),
    ),
    cta: z.object({
      label: z.string(),
      url: z.string(),
    }),
  }),
})

export const collections = {
  'case-studies': caseStudiesCollection,
}
