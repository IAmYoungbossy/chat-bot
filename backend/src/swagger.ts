import { Express } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "Chat Application API",
      description: "API for managing chat conversations and messages",
    },
    components: {
      schemas: {
        Message: {
          type: "object",
          properties: {
            id: { type: "integer", example: 1 },
            content: {
              type: "string",
              example: "Hello, how are you?",
            },
            isUserMessage: { type: "boolean", example: true },
            conversationId: { type: "integer", example: 1 },
            createdAt: {
              type: "string",
              format: "date-time",
              example: "2023-10-01T12:00:00Z",
            },
          },
          required: [
            "id",
            "content",
            "isUserMessage",
            "conversationId",
            "createdAt",
          ],
        },
        Conversation: {
          type: "object",
          properties: {
            id: { type: "integer", example: 1 },
            createdAt: {
              type: "string",
              format: "date-time",
              example: "2023-10-01T12:00:00Z",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              example: "2023-10-01T12:00:00Z",
            },
            messages: {
              type: "array",
              items: { $ref: "#/components/schemas/Message" },
            },
          },
          required: ["id", "createdAt", "updatedAt"],
        },
        Error: {
          type: "object",
          properties: {
            error: { type: "string", example: "An error occurred" },
          },
        },
      },
    },
    paths: {
      "/conversations": {
        post: {
          summary: "Create a new conversation",
          responses: {
            201: {
              description: "Conversation created successfully",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Conversation",
                  },
                },
              },
            },
            500: {
              description: "Server error",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/Error" },
                },
              },
            },
          },
        },
        get: {
          summary: "Get all conversations",
          responses: {
            200: {
              description: "List of conversations",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: {
                      $ref: "#/components/schemas/Conversation",
                    },
                  },
                },
              },
            },
            500: {
              description: "Server error",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/Error" },
                },
              },
            },
          },
        },
      },
      "/conversations/{conversationId}/messages": {
        post: {
          summary: "Send a message in a conversation",
          parameters: [
            {
              in: "path",
              required: true,
              name: "conversationId",
              schema: { type: "integer" },
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["content", "isUserMessage"],
                  properties: {
                    content: {
                      type: "string",
                      example: "Hello, how are you?",
                    },
                    isUserMessage: { type: "boolean", example: true },
                  },
                },
              },
            },
          },
          responses: {
            201: {
              description: "Message sent successfully",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/Message" },
                },
              },
            },
            400: {
              description: "Invalid input",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/Error" },
                },
              },
            },
            500: {
              description: "Server error",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/Error" },
                },
              },
            },
          },
        },
        get: {
          summary: "Get messages for a conversation",
          parameters: [
            {
              name: "conversationId",
              in: "path",
              required: true,
              schema: { type: "integer" },
            },
          ],
          responses: {
            200: {
              description: "List of messages",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: { $ref: "#/components/schemas/Message" },
                  },
                },
              },
            },
            500: {
              description: "Server error",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/Error" },
                },
              },
            },
          },
        },
      },
      "/conversations/{conversationId}": {
        delete: {
          summary: "Delete a conversation",
          parameters: [
            {
              name: "conversationId",
              in: "path",
              required: true,
              schema: { type: "integer" },
            },
          ],
          responses: {
            204: {
              description: "Conversation deleted successfully",
            },
            500: {
              description: "Server error",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/Error" },
                },
              },
            },
          },
        },
      },
    },
    servers: [
      {
        description: "Local server",
        url: `http://localhost:5000/api`,
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};

const specs = swaggerJsdoc(options);

export default (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
