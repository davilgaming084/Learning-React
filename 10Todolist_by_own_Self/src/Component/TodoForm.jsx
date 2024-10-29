import React from 'react'
import { useState, useContext } from 'react';
import { TodoContext } from '../Contexts/TodoContext'; // Change this line
const TodoForm = () => {
    const [inputvalue, setinputvalue] = useState('')
    const { todos, settodos, addtodo, updatetodo, deletetodo, toogletodo } = useContext(TodoContext)

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        addtodo(inputvalue)
    }
    return (
        <form className="flex" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={inputvalue}
                onChange={(e) => setinputvalue(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0" >
                Add
            </button>
        </form>
    );
}

export default TodoForm