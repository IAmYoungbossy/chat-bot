"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const conversationRoutes_1 = __importDefault(require("./routes/conversationRoutes"));
const swagger_1 = __importDefault(require("./swagger"));
const app = (0, express_1.default)();
const PORT = 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use('/api/conversations', conversationRoutes_1.default);
// Swagger documentation
(0, swagger_1.default)(app);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
