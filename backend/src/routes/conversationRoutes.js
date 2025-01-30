import express from 'express';
import { createConversation, getConversations } from '../controllers/conversationController.js';

const router = express.Router();

// Create a new conversation
router.post('/', createConversation);

// Get all conversations
router.get('/', getConversations);

export default router;
