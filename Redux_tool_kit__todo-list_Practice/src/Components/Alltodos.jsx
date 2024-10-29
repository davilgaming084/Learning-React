import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removetodo } from "../Features/TodoSlice"
export const Alltodos = () => {
    const Todos = useSelector((state) => state.Todos.Todos)
    const dispatch = useDispatch()
    const Delete = (id) => (e) => {
        e.preventDefault()
        dispatch(removetodo(id))

    }
    return (
        <div>
            <ul>
                {Todos.map((todo) => (
                    <li key={todo.id}> {todo.text} <button type="button" onClick={Delete(todo.id)}>Delete</button></li>
                ))}
            </ul>
        </div>
    )
}
