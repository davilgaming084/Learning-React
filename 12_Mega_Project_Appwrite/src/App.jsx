import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CONF from './Conf/Conf'
import AuthService from './Appwrite/auth'
import { useDispatch } from "react-redux"
import { login, logout } from './Store/authslice'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/header'
import Footer from './Components/Footer/Footer'
function App() {
  const [loading, setloading] = useState(true)
  const Dispatch = useDispatch()

  useEffect(() => {
    AuthService.userExist()
      .then((userdata) => {
        if (userdata) {
          Dispatch(login({ userdata }))
        }
        else {
          Dispatch(logout())
        }
      })
      .finally(() => setloading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>

      <div className='w-full block'>

        <Header />
        <main>
          <Outlet />
        </main>

        <Footer />

      </div>

    </div>
  ) : null
}

export default App
