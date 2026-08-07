import { z } from "zod";

const categoryFields = {
  name: z
    .string()
    .trim()
    .min(1, "Category name is required.")
    .max(100, "Category name cannot exceed 100 characters."),

  slug: z
    .string()
    .trim()
    .min(1, "Category slug is required.")
    .max(100, "Category slug cannot exceed 100 characters.")
    .toLowerCase(),

  description: z.string().trim().optional(),

  image: z.string().trim().optional(),

  isActive: z.boolean().optional(),
};

export const createCategorySchema = z.object(categoryFields);

export const updateCategorySchema = z
  .object({
    name: categoryFields.name.optional(),
    slug: categoryFields.slug.optional(),
    description: categoryFields.description,
    image: categoryFields.image,
    isActive: categoryFields.isActive,
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: "At least one field must be provided for update.",
    path: ["_form"],
  });
