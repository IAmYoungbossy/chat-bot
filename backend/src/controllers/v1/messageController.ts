import {
  sendMessageService,
  getMessagesByConversationIdService,
} from "../../services/v1/messageService";
import { Request, Response } from "express";
import { validateMessageInput } from "../../validations/messageValidation";

/**
 * Sends a message in a conversation and retrieves the chatbot's response.
 *
 * @param req - The request object containing the conversation ID in the parameters and the message content in the body.
 * @param res - The response object used to send back the status and data.
 * @returns A promise that resolves to void.
 *
 * @throws Will return a 400 status code if the input validation fails.
 * @throws Will return a 500 status code if there is a server error.
 */
export const sendMessageV1 = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { conversationId } = req.params;
    const { content } = req.body;

    const { error } = validateMessageInput({ content });
    if (error) {
      res.status(400).json({ error: error.issues[0].message });
      return;
    }

    const messages = await sendMessageService(
      conversationId,
      content
    );
    res.status(201).json(messages);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Retrieves messages by conversation ID.
 *
 * @param req - The request object containing the conversation ID in the parameters.
 * @param res - The response object used to send back the retrieved messages or an error message.
 * @returns A promise that resolves to void.
 *
 * @throws Will return a 500 status code with an error message if an error occurs during message retrieval.
 */
export const getMessagesByConversationIdV1 = async (
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
