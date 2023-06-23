import { z } from 'zod'

const updateUserZodSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: 'Role is required',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
  }),
})

export const UserValidation = {
  updateUserZodSchema,
}
