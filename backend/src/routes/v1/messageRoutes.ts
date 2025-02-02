import express from "express";
import {
  sendMessageV1,
  getMessagesByConversationIdV1,
} from "../../controllers/v1/messageController";

const router = express.Router();

// Send message
router.post("/:conversationId", sendMessageV1);

// Retrive messages
router.get("/:conversationId", getMessagesByConversationIdV1);

export default router;
