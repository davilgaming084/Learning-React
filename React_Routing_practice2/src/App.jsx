import { useState } from 'react'
import Header from '../src/Components/Header'
import Footer from '../src/Components/Footer'
import { Outlet } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
