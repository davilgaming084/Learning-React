import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddFormTodo from './Components/AddFormTodo'
import { Alltodos } from './Components/Alltodos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddFormTodo />
      <Alltodos />
    </>
  )
}

export default App
