import {
  getConversationsServiceV1,
  deleteConversationServiceV1,
  createConversationServiceV1,
} from "../../services/v1/conversationService";
import { Request, Response } from "express";

/**
 * Creates a new conversation.
 *
 * This function handles the creation of a new conversation by calling the
 * `createConversationService` function. If the conversation is created
 * successfully, it responds with a status code of 201 and the created
 * conversation object in JSON format. If an error occurs, it responds with
 * a status code of 500 and an error message.
 *
 * @param _req - The request object (not used in this function).
 * @param res - The response object used to send the HTTP response.
 * @returns A promise that resolves to the HTTP response.
 */
export const createConversationV1 = async (
  _req: Request,
  res: Response
) => {
  try {
    const conversation = await createConversationServiceV1();
    res.status(201).json(conversation);
  } catch (error) {
    res.status(500).json({
      error:
        error instanceof Error ? error.message : "An error occurred",
    });
  }
};

/**
 * Retrieves a list of conversations.
 *
 * @param _req - The request object (not used in this function).
 * @param res - The response object used to send the result or error.
 * @returns A JSON response with the list of conversations or an error message.
 *
 * @throws Will return a 500 status code with an error message if an error occurs during the retrieval process.
 */
export const getConversationsV1 = async (
  _req: Request,
  res: Response
) => {
  try {
    const conversations = await getConversationsServiceV1();
    res.status(200).json(conversations);
  } catch (error) {
    res.status(500).json({
      error:
        error instanceof Error ? error.message : "An error occurred",
    });
  }
};

/**
 * Deletes a conversation based on the provided conversation ID.
 *
 * @param req - The request object containing the conversation ID in the parameters.
 * @param res - The response object used to send the status of the operation.
 * @returns A promise that resolves to void.
 *
 * @throws Will return a 500 status code and an error message if an error occurs during the deletion process.
 */
export const deleteConversationV1 = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { conversationId } = req.params;
    await deleteConversationServiceV1(conversationId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
