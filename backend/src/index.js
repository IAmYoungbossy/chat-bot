import express from 'express';
import cors from 'cors';
import conversationRoutes from './routes/conversationRoutes.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/conversations', conversationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
