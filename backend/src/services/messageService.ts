import { setTimeout as sleep } from "timers/promises";
import { PrismaClient, Message } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Sends a message in a conversation and simulates a chatbot response.
 *
 * @param {string | number} conversationId - The ID of the conversation where the message will be sent.
 * @param {string} content - The content of the user's message.
 * @returns {Promise<Message[]>} - A promise that resolves to an array of messages in the conversation, ordered by creation time.
 *
 * @example
 * const messages = await sendMessageService(1, "Hello, how are you?");
 * console.log(messages);
 */
export const sendMessageService = async (
  conversationId: string | number,
  content: string
): Promise<Message[]> => {
  await prisma.message.create({
    data: {
      content,
      isUserMessage: true,
      conversationId: parseInt(conversationId.toString()),
    },
  });

  // Simulate chatbot typing delay
  await sleep(2000);

  await prisma.message.create({
    data: {
      content: "This is an AI generated response",
      isUserMessage: false,
      conversationId: parseInt(conversationId.toString()),
    },
  });

  return prisma.message.findMany({
    where: { conversationId: parseInt(conversationId.toString()) },
    orderBy: { createdAt: "asc" },
  });
};

/**
 * Retrieves messages for a given conversation ID, ordered by creation date in ascending order.
 *
 * @param {string | number} conversationId - The ID of the conversation to retrieve messages for.
 * @returns {Promise<Message[]>} A promise that resolves to an array of messages.
 */
export const getMessagesByConversationIdService = async (
  conversationId: string | number
): Promise<Message[]> => {
  return prisma.message.findMany({
    where: { conversationId: parseInt(conversationId.toString()) },
    orderBy: { createdAt: "asc" },
  });
};
