import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Creates a new conversation with an initial chatbot message.
 *
 * This function uses Prisma to create a new conversation record in the database.
 * After creating the conversation, it also creates an initial message associated
 * with the conversation. The initial message is a system message with the content
 * "How can I help you?".
 *
 * @returns {Promise<Conversation>} The newly created conversation object.
 */
export const createConversationServiceV1 = async () => {
  const conversation = await prisma.conversation.create({
    data: {},
  });

  await prisma.message.create({
    data: {
      isUserMessage: false,
      content: "How can I help you?",
      conversationId: parseInt(conversation.id.toString()),
    },
  });

  return conversation;
};

/**
 * Retrieves all conversations from the database, including their associated messages.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of conversation objects, each including their messages.
 */
export const getConversationsServiceV1 = async () => {
  return await prisma.conversation.findMany({
    include: {
      messages: true,
    },
  });
};

/**
 * Deletes a conversation and all its associated messages from the database.
 *
 * @param conversationId - The ID of the conversation to delete. Can be a string or number.
 * @returns A promise that resolves to void when the operation is complete.
 */
export const deleteConversationServiceV1 = async (
  conversationId: string | number
): Promise<void> => {
  await prisma.message.deleteMany({
    where: { conversationId: parseInt(conversationId.toString()) },
  });
  await prisma.conversation.delete({
    where: { id: parseInt(conversationId.toString()) },
  });
};
