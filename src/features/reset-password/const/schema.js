import { z } from "zod";

export const schemaResetPassword = z.object({
  password: z.string().email(),
  confirmPassword: z.string(),
});
