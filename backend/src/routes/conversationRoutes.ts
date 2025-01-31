import express from 'express';
import {
  getConversations,
  createConversation,
  deleteConversation,
} from '../controllers/conversationController';

const router = express.Router();

// Create a new conversation
router.post('/', createConversation);

// Get all conversations
router.get('/', getConversations);

router.delete("/:conversationId", deleteConversation);

export default router;