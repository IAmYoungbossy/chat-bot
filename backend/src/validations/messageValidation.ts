import { z, ZodError, ZodObject } from "zod";

// Zod schema for message input validation
const schema: ZodObject<{ content: z.ZodString }> = z.object({
  content: z.string().min(1, "Message content is required"),
});

/**
 * Validates the input data for a message.
 *
 * @param data - The data to be validated.
 * @returns An object containing a success boolean and an optional error of type ZodError.
 */
export const validateMessageInput = (
  data: unknown
): { success: boolean; error?: ZodError } => {
  return schema.safeParse(data);
};
