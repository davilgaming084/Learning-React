import React, { createContext, useState } from 'react'

const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todoText: "helo",
            completed: false
        }
    ],
    addTodo: () => { },
    updatetodo: () => { },
    removeTodo: () => { },
    toggleTodo: () => { }
})

const TodoProvider = TodoContext.Provider
export { TodoContext, TodoProvider }


