import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removetodo } from "../Features/Todo/TodoSlice"

const Todo = () => {
    const todo = useSelector(state => state.todos)
    let dispatch = useDispatch()
    return (
        <div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Todo List</h2>
            <ul className="list-disc pl-5">
                {todo.map((todo) => (
                    <li key={todo.id} className="flex justify-between items-center mb-2">
                        <span className="text-lg">{todo.text}</span>
                        <button 
                            onClick={() => dispatch(removetodo(todo.id))} 
                            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo
