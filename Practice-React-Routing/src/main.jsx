import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App"
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Contect from './/Component/Contect/Contect'
import Github from './/Component/Github/Github'
import Login from './/Component/Loging/Login'
import { createBrowserRouter, createRoutesFromElements, Route,  RouterProvider } from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/about' element={<About />} />
      <Route path='/contect' element={<Contect />} />
      <Route path='/github' element={< Github />} loader={() => { return fetch('https://api.github.com/users/davilgaming084').then((res) => res.json()) }} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
