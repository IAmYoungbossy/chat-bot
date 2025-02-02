import express from "express";
import {
  getConversationsV1,
  createConversationV1,
  deleteConversationV1,
} from "../../controllers/v1/conversationController";

const router = express.Router();

// Get all conversations
router.get("/", getConversationsV1);

// Create a new conversation
router.post("/", createConversationV1);

// Delete conversation
router.delete("/:conversationId", deleteConversationV1);

export default router;
