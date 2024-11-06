import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import Store from '../src/Store/Store.js'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Authlayout from "../src/Components/Auth_Layout.jsx"
import Login from './Pages/Login.jsx'
import Signup from './Pages/Signup.jsx'
import Allpost from './Pages/Allpost.jsx'
import AddPost from './Pages/AddPost.jsx'
import { Editpost } from './Pages/Editpost.jsx'
import Post from './Pages/Post.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: (
          <Authlayout authentication={false}>
            <Login />
          </Authlayout>
        )
      },
      {
        path: "/signup",
        element: (
          <Authlayout authentication={false}>
            <Signup />
          </Authlayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <Authlayout authentication>
            {" "}
            <Allpost />
          </Authlayout>
        )
      },
      {
        path: "/add-post",
        element: (
          <Authlayout authentication>
            {" "}
            <AddPost />
          </Authlayout>
        ),
      }, {
        path: "/edit-post/:slug",
        element: (
          <Authlayout authentication>
            {" "}
            <Editpost />
          </Authlayout>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />

    </Provider>
  </StrictMode>,
)
