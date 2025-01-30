import { z } from 'zod';

// Zod schema for message input validation
export const validateMessageInput = (data) => {
  const schema = z.object({
    content: z.string().min(1, 'Message content is required'),
  });

  return schema.safeParse(data);
};
