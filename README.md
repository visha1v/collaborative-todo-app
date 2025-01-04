# Collaborative Todo App

A full-stack todo application built with **React.js**, **Node.js**, **Express**, and **MongoDB Atlas** that enables real-time collaboration on todo lists.

## Features

* **Real-time Collaboration**: Multiple users can create and manage todo lists simultaneously
* **Full CRUD Operations**: Create, read, update, and delete todo items seamlessly
* **Modern Tech Stack**: Built with React.js frontend and Express.js backend
* **Persistent Storage**: All todo lists are automatically saved to MongoDB Atlas
* **RESTful Architecture**: Clean API design following REST principles

## Project Structure

```
/collaborative-todo-app/
├── collaborative-todo-app-backend/    # Node.js backend
│   ├── .gitignore
│   ├── server.js                     # Server entry point
│   ├── routes/                       # API routes
│   └── models/                       # Database models
└── collaborative-todo-app-frontend/   # React.js frontend
    ├── public/                       # Static files
    ├── src/                         # React source files
    └── package.json                 # Frontend dependencies
```

## Installation

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install required dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```
   MONGO_URI=<your-mongodb-uri>
   PORT=5000
   ```

4. Start the backend server:
   ```bash
   node server.js
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd collaborative-todo-app-frontend
   ```

2. Install required dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Access the application at [http://localhost:3000](http://localhost:3000)

## API Documentation

The backend provides the following REST API endpoints:

### Todo Operations

* **GET `/todos`**
  * Description: Retrieve all todos
  * Response: Array of todo objects

* **POST `/todos`**
  * Description: Create a new todo
  * Request Body: `{ "text": "New Todo" }`
  * Response: Created todo object

* **PUT `/todos/:id`**
  * Description: Update an existing todo
  * Request Body: `{ "text": "Updated Todo" }`
  * Response: Updated todo object

* **DELETE `/todos/:id`**
  * Description: Delete a specific todo
  * Response: Deletion confirmation

## Testing

You can test the API endpoints using Postman or any other API testing tool. The server runs on `http://localhost:5000` by default.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.