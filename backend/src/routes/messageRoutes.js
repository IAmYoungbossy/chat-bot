import express from 'express';
import {
  sendMessage,
  getMessagesByConversationId,
  deleteConversation,
} from '../controllers/messageController.js';

const router = express.Router();

// Send a message
router.post('/:conversationId/messages', sendMessage);

// Get messages for a conversation
router.get('/:conversationId/messages', getMessagesByConversationId);

// Delete a conversation
router.delete('/:conversationId', deleteConversation);

export default router;
