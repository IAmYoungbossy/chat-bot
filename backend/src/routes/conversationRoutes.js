import express from 'express';
import messageRoutes from './messageRoutes.js';

const router = express.Router();

// Mount message routes
router.use('/:conversationId', messageRoutes);

export default router;
