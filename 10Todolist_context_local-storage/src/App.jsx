import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import { TodoContext, TodoProvider } from './Context/TodoContext';
import TodoForm from './Componenets/TodoForm';
import Todoitem from './Componenets/Todoitem';
const App = () => {
  const [todos, settodo] = useState([])
  const addTodo = (todoText) => {
    // Ensure todoText is an object with necessary properties
    settodo((prev) => [{ id: Date.now(), ...todoText }, ...prev])
  };

  const updatetodo = (id, todo) => {
    settodo((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }
  const removeTodo = (id) => {
    settodo((prev) => prev.filter((todo) => todo.id !== id))
  }
  const toggleTodo = (id) => {
    settodo((prev) => prev.map((todo) => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo // Compare todo.id with id
    ));
  }
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      settodo(todos)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])



  return (
    <TodoProvider value={{ todos, settodo, addTodo, updatetodo, removeTodo, toggleTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}

            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <Todoitem todo={todo} /> 
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App
