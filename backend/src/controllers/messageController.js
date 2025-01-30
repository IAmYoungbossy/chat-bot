import {
  sendMessageService,
  getMessagesByConversationIdService,
  deleteConversationService,
} from '../services/messageService.js';
import { validateMessageInput } from '../validations/messageValidation.js';

export const sendMessage = async (req, res) => {
  try {
    const { conversationId } = req.params;
    const { content } = req.body;

    // Validate input
    const { error } = validateMessageInput({ content });
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Send message and get chatbot response
    const messages = await sendMessageService(conversationId, content);
    res.status(201).json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMessagesByConversationId = async (req, res) => {
  try {
    const { conversationId } = req.params;
    const messages = await getMessagesByConversationIdService(conversationId);
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteConversation = async (req, res) => {
  try {
    const { conversationId } = req.params;
    await deleteConversationService(conversationId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
