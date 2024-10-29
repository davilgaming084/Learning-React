import React from 'react'
import { useContext } from 'react'
import { TodoContext } from '../Contexts/TodoContext'

const AlltodoItem = () => {
    const { todos , deletetodo,updatetodo, } = useContext(TodoContext)

    return (
        <div>
            {todos.map((element)=>{
                return   <p key={element.id}> <input type="checkbox"  /> {element.todoTextis} <button > Edit </button> <button onClick={()=> deletetodo(element.id)}>Delete </button> </p>

            })}
        </div>
    )
}

export default AlltodoItem