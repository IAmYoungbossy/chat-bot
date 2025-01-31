"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const conversationController_1 = require("../controllers/conversationController");
const router = express_1.default.Router();
// Create a new conversation
router.post('/', conversationController_1.createConversation);
// Get all conversations
router.get('/', conversationController_1.getConversations);
exports.default = router;
