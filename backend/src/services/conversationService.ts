import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createConversationService = async () => {
  const conversation = await prisma.conversation.create({
    data: {},
  });

  // Create Bot initial response
  await prisma.message.create({
    data: {
      isUserMessage: false,
      content: "How can I help you?",
      conversationId: parseInt(conversation.id.toString()),
    },
  });

  return conversation;
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
