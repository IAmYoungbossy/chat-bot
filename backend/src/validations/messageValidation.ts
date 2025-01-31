import { z, ZodError, ZodObject } from "zod";

// Zod schema for message input validation
const schema: ZodObject<{ content: z.ZodString }> = z.object({
  content: z.string().min(1, "Message content is required"),
});

export const validateMessageInput = (
  data: unknown
): { success: boolean; error?: ZodError } => {
  return schema.safeParse(data);
};
