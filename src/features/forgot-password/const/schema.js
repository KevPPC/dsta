import { z } from "zod";

export const schemaForgotPassword = z.object({
  email: z.string().email(),
});
