import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

const TodoContext = createContext({
    todos: [
        {
            id: 1,
            TodoText: "example_text",
            Complete: false
        }
    ],
    addtodo: () => { },
    updatetodo: () => { },
    deletetodo: () => { },
    toogletodo: () => { },
});

const TodoProvider = ({ children }) => {
    const [todos, settodos] = useState([])
    const addtodo = (todoText) => {

            settodos((prev) => {
                const newTodos = [
                    { id: Date.now(), todoTextis: todoText, completeis: false },
                    ...prev
                ];
                console.log(todos); // Log the new state after it's created
                return newTodos; // Return the new state
            });
    }
    const updatetodo = (id, newText) => {
        settodos((prev) => 
            prev.map((todo) => 
                todo.id === id ? { ...todo, TodoText: newText } : todo
            )
        );
    }
    const deletetodo = (id) => {
        settodos((prev) => prev.filter((todo) => todo.id !== id))

     }
    const toogletodo = () => { }
    return (
        <TodoContext.Provider value={{ todos, settodos, addtodo, updatetodo, deletetodo, toogletodo }}>
            {children}
        </TodoContext.Provider>
    )
}
export { TodoContext, TodoProvider }
