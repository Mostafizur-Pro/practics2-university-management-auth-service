import { z } from 'zod'

const createUserZodSchema = z.object({
  body: z.object({
    role: z.string(),
    password: z.string().optional(),
  }),
})

export const UserValidation = {
  createUserZodSchema,
}
