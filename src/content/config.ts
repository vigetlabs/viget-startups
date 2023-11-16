import { defineCollection, z } from 'astro:content'

const clientsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      logo: image(),
    }),
})

const caseStudiesCollection = defineCollection({
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
    cta: z
      .object({
        label: z.string(),
        url: z.string(),
      })
      .optional(),
  }),
})

const testimonialsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      author: z.object({
        name: z.string(),
        label: z.string(),
        avatar: z.object({
          image: image().refine((img) => img.width == img.height, {
            message: 'Avatar image must be square',
          }),
          alt: z.string(),
        }),
      }),
      cta: z
        .object({
          label: z.string(),
          url: z.string(),
        })
        .optional(),
      sortOrder: z.number().optional(),
    }),
})

export const collections = {
  clients: clientsCollection,
  'case-studies': caseStudiesCollection,
  testimonials: testimonialsCollection,
}
