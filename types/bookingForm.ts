import { z } from "zod";

export const bookingFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  car: z.string().min(1),
  color: z.string().min(1),
  pickUpDate: z.date().min(new Date()),
  pickUpLocation: z.string().min(1),
  dropOffDate: z.date(),
  dropOffLocation: z.string().min(1)
});

export type BookingForm = z.infer<typeof bookingFormSchema>;
