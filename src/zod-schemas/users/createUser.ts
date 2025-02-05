import z from "zod";
import { OTHER, STUDENT, TEACHER } from "../../constants/roles";

// only lowercase, numbers, does not accept accents and cannot start with numbers
const regex = /^[^\d][a-z\d]+$/;

export const schemaCreateUser = z.object({
  name: z.string().min(1),
  username: z
    .string()
    .min(6)
    .max(15)
    .refine((username) => regex.test(username), {
      message:
        "only lowercase, numbers, does not accept accents and cannot start with numbers",
    }),
  role: z.enum([STUDENT, TEACHER, OTHER]),
  state: z.boolean().optional(),
});
