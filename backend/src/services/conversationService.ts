import { PrismaClient } from "@prisma/client";

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

export const deleteConversationService = async (
  conversationId: string | number
): Promise<void> => {
  await prisma.message.deleteMany({
    where: { conversationId: parseInt(conversationId.toString()) },
  });
  await prisma.conversation.delete({
    where: { id: parseInt(conversationId.toString()) },
  });
};
