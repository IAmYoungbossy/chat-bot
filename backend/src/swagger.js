export default {
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
  paths: {
    '/conversations': {
      post: {
        summary: 'Create a new conversation',
        responses: {
          201: {
            description: 'Conversation created successfully',
          },
        },
      },
      get: {
        summary: 'Get all conversations',
        responses: {
          200: {
            description: 'List of conversations',
          },
        },
      },
    },
    '/conversations/{conversationId}/messages': {
      post: {
        summary: 'Send a message in a conversation',
        parameters: [
          {
            name: 'conversationId',
            in: 'path',
            required: true,
            schema: {
              type: 'integer',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  content: {
                    type: 'string',
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: 'Message sent successfully',
          },
        },
      },
      get: {
        summary: 'Get messages for a conversation',
        parameters: [
          {
            name: 'conversationId',
            in: 'path',
            required: true,
            schema: {
              type: 'integer',
            },
          },
        ],
        responses: {
          200: {
            description: 'List of messages',
          },
        },
      },
    },
    '/conversations/{conversationId}': {
      delete: {
        summary: 'Delete a conversation',
        parameters: [
          {
            name: 'conversationId',
            in: 'path',
            required: true,
            schema: {
              type: 'integer',
            },
          },
        ],
        responses: {
          204: {
            description: 'Conversation deleted successfully',
          },
        },
      },
    },
  },
};
