# Chat Application

A full-stack chat application built with **Next.js** (frontend) and **Express.js** (backend). The backend provides a RESTful API for managing conversations and messages, while the frontend delivers a responsive and user-friendly chat interface.

## **Features**
- Fetch previous conversations and messages
- Send new messages
- Switch between conversations
- Delete a conversation
- Real-time chatbot interaction with simulated typing delay
- Responsive UI optimized for mobile and desktop
- Backend API documentation with Swagger
- Data validation using Zod
- Dockerized setup for easy deployment

---

## **Live Demo & Deployment Details**

### **Frontend** (Vercel)
🔗 [Chatbot Application](https://chat-bot-delta-seven.vercel.app/)

### **Backend** (Render)
🔗 [API Base URL](https://chat-bot-6zsx.onrender.com)

📜 [Swagger API Docs](https://chat-bot-6zsx.onrender.com/api-docs)

**Note:** Since Render's free tier has an auto-sleep feature, the backend may take up to **50 seconds** to restart after inactivity. If you encounter an error, wait and refresh the page.

## **Screenshots**
### **Error Screen**
![Error Screen](./assets/error_screen.png)
> If you see this, wait ~1 min and refresh the page.

### **Home Screen**
![Home Screen](./assets/home_screen.png)
> Default screen when no chat is selected.

### **Chat Window**
![Chat Window](./assets/chat_window_screen.png)
> Displays conversation history.

### **Delete Confirmation**
![Delete Screen](./assets/delete_screen.png)
> If deleting the current chat, the app redirects to the home screen.

### **Mobile Views**
#### **Mobile Menu**
![Mobile Menu](./assets/mobile_menu.png)

#### **Mobile Chat Window**
![Mobile Chat Window](./assets/mobile_chat_window.png)

#### **Mobile Delete Modal**
![Mobile Delete Modal](./assets/mobile_delete_modal.png)

---

## **Local Development Setup**

### **Prerequisites**
- Node.js 16+
- Docker & Docker Compose
- PostgreSQL (if running manually without Docker)

### **Setup Instructions**

#### **1. Clone the Repository**
```bash
git clone https://github.com/IAmYoungbossy/chat-bot.git
cd chat-bot
```

#### **2. Install Dependencies**
##### Backend
```bash
cd backend
npm install
```
##### Frontend
```bash
cd ../frontend
npm install
```

#### **3. Set Up Environment Variables**
##### Backend (`backend/.env`)
```env
DATABASE_URL="postgresql://chatuser:chatpassword@localhost:5432/chatdb"
NODE_ENV=development
PORT=5000
```
##### Frontend (`frontend/.env`)
```env
NEXT_PUBLIC_NODE_ENV=development
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000/api/v1
```

#### **4. Start the Database**
```bash
docker-compose up -d db
```
Run Prisma migrations to initialize the database schema:
```bash
npx prisma migrate dev --name init
```

#### **5. Start Backend & Frontend**
```bash
docker-compose up --build
```
- **Backend:** `http://localhost:5000`
- **Swagger Docs:** `http://localhost:5000/api-docs`
- **Frontend:** `http://localhost:3000`

---

## **Deployment Guide**

### **Backend (Render)**
1. **Create a PostgreSQL Database on Render**
   - Copy the **Internal Database URL**
2. **Deploy Backend Service**
   - Link GitHub repo and select `backend` as the root directory.
   - Set the environment variable `DATABASE_URL` to the Render database URL.
   - Configure build and start commands:
     ```bash
     npm run build
     npm start
     ```

### **Frontend (Vercel)**
1. **Import GitHub Repository to Vercel**
   - Set project root to `frontend`
2. **Set Environment Variable:**
   - `NEXT_PUBLIC_BACKEND_URL = https://chat-bot-6zsx.onrender.com`
3. **Deploy and access frontend:**
   ```
   https://chat-bot-delta-seven.vercel.app/
   ```

---

## **Project Structure**

```plaintext
chat-bot/
├── backend/
│   ├── Dockerfile
│   ├── prisma/
│   │   └── schema.prisma
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── services/
│   │   ├── middlewares/
│   │   ├── utils/
│   ├── package.json
│   ├── .env
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── utils/
│   ├── package.json
│   ├── .env
├── docker-compose.yml
├── README.md
```

---

## **API Documentation**

The backend API is documented using Swagger. You can access the API documentation at:
🔗 [Swagger API Docs](https://chat-bot-6zsx.onrender.com/api-docs)

### **Endpoints Overview**
| Method | Endpoint                  | Description            |
|--------|---------------------------|------------------------|
| GET    | `/api/v1/conversations`    | Get all conversations |
| POST   | `/api/v1/conversations`    | Create a new chat     |
| GET    | `/api/v1/messages/:id`     | Get messages for chat |
| POST   | `/api/v1/messages`         | Send a new message    |
| DELETE | `/api/v1/conversations/:id`| Delete a conversation |

---

## **Technologies Used**

### **Frontend**
- **Next.js** – React framework for SSR
- **MaterialUI** – UI components
- **TailwindCSS** – Styling

### **Backend**
- **Express.js** – Node.js framework
- **Prisma** – ORM for PostgreSQL
- **Zod** – Request validation
- **Swagger** – API documentation

### **Infrastructure & Deployment**
- **Docker & Docker Compose** – Local and containerized setup
- **Render** – Backend hosting
- **Vercel** – Frontend hosting

---

## **Future Improvements**
- Implement WebSockets for real-time updates
- Enhance chatbot responses using AI
- Improve UI animations and transitions
- Implement gracefull error handling

---

## **License**
This project is open-source and available under the **MIT License**.

---

## **Author**
👤 **Letam Bossman Barinua**  
📧 [Email](mailto:letambossman@gmail.com)  
🔗 [GitHub](https://github.com/IAmYoungbossy)
