import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createConversationService = async () => {
  return await prisma.conversation.create({
    data: {},
  });
};

export const getConversationsService = async () => {
  return await prisma.conversation.findMany({
    include: {
      messages: true,
    },
  });
};
