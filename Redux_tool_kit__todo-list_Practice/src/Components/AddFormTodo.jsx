import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtodo } from "../Features/TodoSlice"

const AddFormTodo = () => {
    const [inputFieldValue, setInputFieldValue] = useState('')
    const dispatch = useDispatch()

    const handleAdd = (e) => {
        e.preventDefault()
        if (inputFieldValue.trim()) {
            dispatch(addtodo(inputFieldValue))
            setInputFieldValue('')
        }
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder='Add Todos' 
                value={inputFieldValue} 
                onChange={(e) => setInputFieldValue(e.target.value)} 
            />
            <button type="button" onClick={handleAdd}>Add</button>
        </div>
    )
}

export default AddFormTodo
