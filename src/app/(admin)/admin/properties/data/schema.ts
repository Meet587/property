import { z } from 'zod'

const propertyTypeSchema = z.union([
  z.literal('house'),
  z.literal('flat'),
  z.literal('commercial'),
])
export type PropertyType = z.infer<typeof propertyTypeSchema>

const propertyForSchema = z.union([
  z.literal('rent'),
  z.literal('sale'),
])

const propertySchema = z.object({
  id: z.number(),
  address: z.string(),
  bedrooms: z.string(),
  bathrooms: z.string(),
  sqft: z.string(),
  year_built: z.string(),
  price: z.string(),
  imageUrl: z.string(),
  Description: z.string(),
  property_type: propertyTypeSchema,
  for: propertyForSchema,
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})
export type Property = z.infer<typeof propertySchema>

export const PropertyListSchema = z.array(propertySchema)
