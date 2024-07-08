import { z } from "zod";

export const contactUsFormSchema = z.object({
  email: z.string().email(),
  message: z.string().min(10)
});

export type ContactUsForm = z.infer<typeof contactUsFormSchema>;
