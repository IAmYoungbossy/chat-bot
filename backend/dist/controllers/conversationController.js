"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConversations = exports.createConversation = void 0;
const conversationService_1 = require("../services/conversationService");
const createConversation = async (req, res) => {
    try {
        const conversation = await (0, conversationService_1.createConversationService)();
        res.status(201).json(conversation);
    }
    catch (error) {
        res
            .status(500)
            .json({
            error: error instanceof Error
                ? error.message
                : "An error occurred",
        });
    }
};
exports.createConversation = createConversation;
const getConversations = async (req, res) => {
    try {
        const conversations = await (0, conversationService_1.getConversationsService)();
        res.status(200).json(conversations);
    }
    catch (error) {
        res
            .status(500)
            .json({
            error: error instanceof Error
                ? error.message
                : "An error occurred",
        });
    }
};
exports.getConversations = getConversations;
