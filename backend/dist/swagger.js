"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Chat Application API',
            version: '1.0.0',
            description: 'API for managing chat conversations and messages',
        },
        servers: [
            {
                url: 'http://localhost:5000/api',
                description: 'Local server',
            },
        ],
    },
    apis: ['./src/routes/*.ts'], // Path to the API routes
};
const specs = (0, swagger_jsdoc_1.default)(options);
exports.default = (app) => {
    app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
};
