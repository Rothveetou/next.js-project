import { number, z } from "zod";

export const schema = z.object({
  id: z.number(),
  name: z.string().min(3),
  price: z.number().min(1),
});
