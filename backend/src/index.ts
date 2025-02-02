import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import setupSwagger from "./swagger";
import messageRoutesV1 from "./routes/v1/messageRoutes";
import conversationRoutesV1 from "./routes/v1/conversationRoutes";

dotenv.config();
const PORT = 5000;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Version 1 Routes
app.use("/api/v1/messages", messageRoutesV1);
app.use("/api/v1/conversations", conversationRoutesV1);

// Swagger documentation
setupSwagger(app);

const port = process.env.PORT || PORT;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
