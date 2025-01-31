import { Express } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Chat Application API",
      version: "1.0.0",
      description: "API for managing chat conversations and messages",
    },
    paths: {
      "/conversations": {
        post: {
          summary: "Create a new conversation",
          responses: {
            201: {
              description: "Conversation created successfully",
            },
          },
        },
        get: {
          summary: "Get all conversations",
          responses: {
            200: {
              description: "List of conversations",
            },
          },
        },
      },
      "/conversations/{conversationId}/messages": {
        post: {
          summary: "Send a message in a conversation",
          parameters: [
            {
              name: "conversationId",
              in: "path",
              required: true,
              schema: {
                type: "integer",
              },
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    content: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
          responses: {
            201: {
              description: "Message sent successfully",
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
              schema: {
                type: "integer",
              },
            },
          ],
          responses: {
            200: {
              description: "List of messages",
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
              schema: {
                type: "integer",
              },
            },
          ],
          responses: {
            204: {
              description: "Conversation deleted successfully",
            },
          },
        },
      },
    },
    servers: [
      {
        url: `http://backend:5000/api`,
        description: "Local server",
      },
    ],
  },
  apis: ["./src/routes/*.ts"], // Path to the API routes
};

const specs = swaggerJsdoc(options);

export default (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
