import React from 'react'
import { TodoProvider } from '../src/Contexts/TodoContext'
import TodoForm from './Component/TodoForm'
import AlltodoItem from './Component/AlltodoItem'

const App = () => {
  return (

    <TodoProvider>
      
      <TodoForm />
      <AlltodoItem />

    </TodoProvider>
  )
}

export default App