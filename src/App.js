import React, { useEffect, useState } from "react";
import ToDoList from "./components/ToDoList/ToDoList";
import axios from "axios";

const _API = axios.create({
  baseURL: "https://66670e5da2f8516ff7a61ddb.mockapi.io/todos/todos",
});

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await _API.get();
        setTodos(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err); // Додано
        setError("Failed to fetch todos");
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = async (newTodo) => {
    try {
      const response = await _API.post("", newTodo);

      setTodos([...todos, response.data]);
    } catch (err) {
      setError("Failed to add todo");
    }
  };

  const updateTodo = async (id, updatedTodo) => {
    try {
      const response = await _API.put(`${id}`, updatedTodo);

      setTodos(todos.map((todo) => (todo.id === id ? response.data : todo)));
    } catch (err) {
      setError("Failed to update todo");
    }
  };

  const deleteTodo = async (id) => {
    try {
      await _API.delete(`${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      setError("Failed to delete todo");
    }
  };

  const deleteAllTodos = async () => {
    try {
      const deletePromises = todos.map((todo) => _API.delete(`${todo.id}`));
      await Promise.all(deletePromises);
      setTodos([]);
    } catch (err) {
      console.error(err);
      setError("Failed to delete all todos");
    }
  };

  return (
    <div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <ToDoList
          todos={todos}
          addTodo={addTodo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          deleteAllTodos={deleteAllTodos}
        />
      )}
    </div>
  );
};

export default App;
