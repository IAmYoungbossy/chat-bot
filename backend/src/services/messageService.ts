import { setTimeout as sleep } from "timers/promises";
import { PrismaClient, Message } from "@prisma/client";

const prisma = new PrismaClient();

// Send a message and get chatbot response
export const sendMessageService = async (
  conversationId: string | number,
  content: string
): Promise<Message[]> => {
  // Save user message
  await prisma.message.create({
    data: {
      content,
      isUserMessage: true,
      conversationId: parseInt(conversationId.toString()),
    },
  });

  // Simulate chatbot typing delay
  await sleep(2000);

  // Save chatbot response
  await prisma.message.create({
    data: {
      content: "This is an AI generated response",
      isUserMessage: false,
      conversationId: parseInt(conversationId.toString()),
    },
  });

  // Return all messages for the conversation
  return prisma.message.findMany({
    where: { conversationId: parseInt(conversationId.toString()) },
    orderBy: { createdAt: "asc" },
  });
};

// Get messages for a conversation
export const getMessagesByConversationIdService = async (
  conversationId: string | number
): Promise<Message[]> => {
  return prisma.message.findMany({
    where: { conversationId: parseInt(conversationId.toString()) },
    orderBy: { createdAt: "asc" },
  });
};
