import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root_layout from './root_layout.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Component/Home/Home.jsx'
import About from './Component/About/About.jsx'
import Contect from './Component/Contect/Contect.jsx'
import User from './Component/User/User.jsx'
import Github from './Component/Github/Github.jsx'
import Login from './Component/Loging/Login.jsx'

// way 1 for craeteing router 
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root_layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "Contect",
//         element: <Contect />
//       }
//     ]
//   }
// ])  

// way 3 for craeteing router 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root_layout />} >
      <Route path='login' element={<Login />} />
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contect' element={<Contect />} />
      <Route path='user/:id' element={<User />} />
      <Route path='github' element={<Github />} loader={() => { return fetch('https://api.github.com/users/davilgaming084').then((res)=> res.json()) }} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
