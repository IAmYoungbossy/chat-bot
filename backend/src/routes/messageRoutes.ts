import express from "express";
import {
  sendMessage,
  getMessagesByConversationId,
} from "../controllers/messageController";

const router = express.Router();

// Send message
router.post("/:conversationId", sendMessage);

// Retrive messages
router.get("/:conversationId", getMessagesByConversationId);

export default router;
