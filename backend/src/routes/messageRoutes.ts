import express from "express";
import {
  sendMessage,
  getMessagesByConversationId,
} from "../controllers/messageController";

const router = express.Router();

router.post("/:conversationId", sendMessage);
router.get("/:conversationId", getMessagesByConversationId);

export default router;
