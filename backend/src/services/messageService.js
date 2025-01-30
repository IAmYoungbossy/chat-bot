import { PrismaClient } from '@prisma/client';
import { setTimeout as sleep } from 'timers/promises';

const prisma = new PrismaClient();

// Send a message and get chatbot response
export const sendMessageService = async (conversationId, content) => {
  // Save user message
  await prisma.message.create({
    data: {
      content,
      isUserMessage: true,
      conversationId: parseInt(conversationId),
    },
  });

  // Simulate chatbot typing delay
  await sleep(2000);

  // Save chatbot response
  const chatbotMessage = await prisma.message.create({
    data: {
      content: 'This is an AI generated response',
      isUserMessage: false,
      conversationId: parseInt(conversationId),
    },
  });

  // Return all messages for the conversation
  return prisma.message.findMany({
    where: { conversationId: parseInt(conversationId) },
    orderBy: { createdAt: 'asc' },
  });
};

// Get messages for a conversation
export const getMessagesByConversationIdService = async (conversationId) => {
  return prisma.message.findMany({
    where: { conversationId: parseInt(conversationId) },
    orderBy: { createdAt: 'asc' },
  });
};

// Delete a conversation
export const deleteConversationService = async (conversationId) => {
  await prisma.message.deleteMany({
    where: { conversationId: parseInt(conversationId) },
  });
  await prisma.conversation.delete({
    where: { id: parseInt(conversationId) },
  });
};
