# Collaborative Todo App

This is a full-stack Collaborative Todo App built using **React.js** for the frontend and **Node.js** with **Express** for the backend. The app connects to **MongoDB Atlas** to store and manage the todo lists.

## Features
- Create, update, and delete todo items.
- Todo lists are saved and managed in a MongoDB database.
- Frontend built with React.js.
- Backend built with Express.js and MongoDB.
- REST API endpoints for interacting with the todo lists.

## Project Structure
/collaborative-todo-app
├── backend/                  # Node.js backend
│   ├── .gitignore
│   ├── server.js             # Server entry point
│   ├── routes/               # API routes
│   └── models/               # Database models
└── collaborative-todo-app-frontend/   # React.js frontend
├── public/               # Static files (HTML, images, etc.)
├── src/                  # React source files
└── package.json          # Frontend dependencies

## Installation & Setup

### Backend Setup

1. Clone the repository or navigate to the `backend` folder.
2. Install dependencies:
   ```bash
   cd backend
   npm install
3.	Create a .env file inside the backend folder and add the following:
    MONGO_URI=<your-mongodb-uri>
    PORT=5000
4.	Start the backend server:
    node server.js

### Frontend Setup

1.	Clone the repository or navigate to the collaborative-todo-app-frontend folder.
2.	Install dependencies:
    cd collaborative-todo-app-frontend
    npm install
3.  Start the frontend server:
    npm start
4.	Open your browser and navigate to http://localhost:3000 to interact with the app.

### Testing with Postman

You can test the backend API with Postman using the following routes:
	•	GET http://localhost:5000/todos - Get all todos
	•	POST http://localhost:5000/todos - Create a new todo
	•	Body: JSON with { "text": "New Todo" }
	•	PUT http://localhost:5000/todos/:id - Update a todo
	•	Body: JSON with { "text": "Updated Todo" }
	•	DELETE http://localhost:5000/todos/:id - Delete a todo