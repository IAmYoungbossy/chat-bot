# Chat Application
This is a full-stack chat application built with **Next.js** (frontend) and **Express.js** (backend). It allows users to create conversations, send messages, and interact with a chatbot. The application is designed to be scalable, maintainable, and follows best practices for clean code and architecture.
---
## **Features**
- **Frontend**:
  - Create and delete conversations.
  - Send messages to a chatbot.
  - View chat history with a typing animation for the chatbot.
  - Responsive and user-friendly UI built with **Tailwind CSS** and **Material-UI**.
- **Backend**:
  - RESTful API for managing conversations and messages.
  - Database integration with **PostgreSQL** and **Prisma ORM**.
  - Swagger documentation for API endpoints.
---
## **Technologies Used**
- **Frontend**:
  - Next.js (App Router)
  - Tailwind CSS
  - Material-UI
  - TypeScript
- **Backend**:
  - Express.js
  - Prisma ORM
  - PostgreSQL
  - TypeScript
  - Swagger (API documentation)
- **DevOps**:
  - Docker
  - Docker Compose
---
## **Getting Started**
### **Prerequisites**
1. **Node.js**: Ensure you have Node.js installed (v18 or higher).
2. **Docker**: Install Docker and Docker Compose to run the application in containers.
3. **PostgreSQL**: The application uses PostgreSQL as the database. Docker will handle this for you.
### **Setup**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/chat-app.git
   cd chat-app
   ```
2. Set up environment variables:
   - Create a `.env` file in the `backend` directory:
     ```env
     DATABASE_URL="postgresql://chatuser:chatpassword@db:5432/chatdb"
     ```
   - Create a `.env.local` file in the `frontend` directory:
     ```env
     NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
     ```
3. Start the application with Docker:
   ```bash
   docker-compose up --build
   ```
4. Access the application:
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000`
   - Swagger Docs: `http://localhost:5000/api-docs`
---
## **Project Structure**
```
.
├── backend
│   ├── Dockerfile
│   ├── prisma
│   ├── src
│   │   ├── controllers
│   │   ├── routes
│   │   ├── services
│   │   ├── swagger.ts
│   │   └── validations
├── frontend
│   ├── Dockerfile
│   ├── src
│   │   ├── app
│   │   ├── components
│   │   ├── constant
│   │   ├── context
│   │   ├── customHooks
│   │   ├── types
│   │   └── utils
├── docker-compose.yml
└── README.md
```
---
## **Future Improvements**
1. **Authentication**:
   - Add user authentication (e.g., JWT or OAuth).
   - Implement role-based access control.
2. **Real-Time Communication**:
   - Integrate WebSockets for real-time messaging.
3. **Testing**:
   - Add unit and integration tests for both frontend and backend.
4. **Deployment**:
   - Deploy the application to a cloud platform (e.g., Vercel, AWS, or Heroku).
5. **UI Enhancements**:
   - Add dark mode support.
   - Improve accessibility and responsiveness.
---
## **Contributing**
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request with a detailed description of your changes.
```
