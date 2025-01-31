"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConversationsService = exports.createConversationService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createConversationService = async () => {
    return await prisma.conversation.create({
        data: {},
    });
};
exports.createConversationService = createConversationService;
const getConversationsService = async () => {
    return await prisma.conversation.findMany({
        include: {
            messages: true,
        },
    });
};
exports.getConversationsService = getConversationsService;
