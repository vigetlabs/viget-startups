import { defineCollection, z } from 'astro:content'

const sectionsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      heading: z.string(),
      overline: z.string().optional(),
      subheading: z.string().optional(),
      cta: z
        .object({
          label: z.string(),
          url: z.string(),
        })
        .optional(),
      kpis: z
        .array(
          z.object({
            label: z.string(),
            value: z.string(),
          }),
        )
        .optional(),
      left: z
        .object({
          heading: z.string(),
          items: z.array(z.string()).optional(),
        })
        .optional(),
      right: z
        .object({
          heading: z.string(),
          items: z.array(z.string()),
        })
        .optional(),
      list: z
        .array(
          z.object({
            icon: z.string(),
            heading: z.string(),
            description: z.string(),
          }),
        )
        .optional(),
      marquee: z
        .array(
          z.object({
            name: z.string(),
            logo: image(),
          }),
        )
        .optional(),
    }),
})

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

const testimonialsCollection = defineCollection({
  type: 'content',
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
  sections: sectionsCollection,
  'case-studies': caseStudiesCollection,
  testimonials: testimonialsCollection,
}
