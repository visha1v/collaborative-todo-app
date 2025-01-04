import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import TodoForm from './TodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  // Fetch todos from the backend
  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5001/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Add a new todo to the list
  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // Delete a todo from the list
  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`http://localhost:5001/todos/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setTodos(todos.filter((todo) => todo._id !== id)); // Remove the todo from the list
      } else {
        console.error('Failed to delete todo');
      }
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className="todo-list-container">
      <h1 className="todo-list-header">Todo List</h1>
      <TodoForm onAddTodo={addTodo} />
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo._id} className="todo-item">
            <span className="todo-text">{todo.title}</span>
            <button onClick={() => deleteTodo(todo._id)} className="delete-btn">
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;