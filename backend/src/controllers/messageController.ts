import {
  sendMessageService,
  getMessagesByConversationIdService,
} from "../services/messageService";
import { Request, Response } from "express";
import { validateMessageInput } from "../validations/messageValidation";

export const sendMessage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { conversationId } = req.params;
    const { content } = req.body;

    // Validate input
    const { error } = validateMessageInput({ content });
    if (error) {
      res.status(400).json({ error: error.issues[0].message });
      return;
    }

    // Send message and get chatbot response
    const messages = await sendMessageService(
      conversationId,
      content
    );
    res.status(201).json(messages);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getMessagesByConversationId = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { conversationId } = req.params;
    const messages = await getMessagesByConversationIdService(
      conversationId
    );
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
