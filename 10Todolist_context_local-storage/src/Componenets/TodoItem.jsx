import React, { useContext, useState } from 'react';
import { TodoContext } from '../Context/TodoContext';

const TodoItem = ({ todo }) => {
    
    const [isTodoEditable, setisTodoEditable] = useState(false)
    const [todoMsg, settodoMsg] = useState(todo.todo)
    const { updatetodo, removeTodo, toggleTodo } = useContext(TodoContext)

    const toggleComplete = () => {
        toggleTodo(todo.id);
    }

    const edittodo = () => {
        if (todoMsg.trim() === "") return;
        updatetodo(todo.id, { ...todo, todo: todoMsg });
        setisTodoEditable(false);
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
                }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleComplete}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                    } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => settodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        edittodo();
                    } else setisTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => removeTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}


export default TodoItem;
