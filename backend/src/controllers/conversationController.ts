import {
  getConversationsService,
  deleteConversationService,
  createConversationService,
} from "../services/conversationService";
import { Request, Response } from "express";

export const createConversation = async (
  _req: Request,
  res: Response
) => {
  try {
    const conversation = await createConversationService();
    res.status(201).json(conversation);
  } catch (error) {
    res.status(500).json({
      error:
        error instanceof Error ? error.message : "An error occurred",
    });
  }
};

export const getConversations = async (
  _req: Request,
  res: Response
) => {
  try {
    const conversations = await getConversationsService();
    res.status(200).json(conversations);
  } catch (error) {
    res.status(500).json({
      error:
        error instanceof Error ? error.message : "An error occurred",
    });
  }
};

export const deleteConversation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { conversationId } = req.params;
    await deleteConversationService(conversationId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
