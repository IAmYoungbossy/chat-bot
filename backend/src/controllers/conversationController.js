import { createConversationService, getConversationsService } from '../services/conversationService.js';

export const createConversation = async (req, res) => {
  try {
    const conversation = await createConversationService();
    res.status(201).json(conversation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getConversations = async (req, res) => {
  try {
    const conversations = await getConversationsService();
    res.status(200).json(conversations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
