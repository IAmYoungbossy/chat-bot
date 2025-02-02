import cors from "cors";
import express from "express";
import setupSwagger from "./swagger";
import messageRoutes from "./routes/v1/messageRoutes";
import conversationRoutes from "./routes/v1/conversationRoutes";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/messages", messageRoutes);
app.use("/api/conversations", conversationRoutes);

// Swagger documentation
setupSwagger(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
