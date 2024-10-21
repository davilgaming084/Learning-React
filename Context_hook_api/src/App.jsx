import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { UserContext } from './Context/UserContext'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  const [User, setUser] = useState(null)
  const [pass, setpass] = useState(null)

  return (
    <UserContext.Provider value={{ User, setUser , pass , setpass }}>
      <Login />
      <Profile />
    </UserContext.Provider>

  )
}

export default App
