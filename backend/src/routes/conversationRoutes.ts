import express from 'express';
import {
  getConversations,
  createConversation,
  deleteConversation,
} from '../controllers/conversationController';

const router = express.Router();

// Get all conversations
router.get('/', getConversations);

// Create a new conversation
router.post('/', createConversation);

// Delete conversation
router.delete("/:conversationId", deleteConversation);

export default router;