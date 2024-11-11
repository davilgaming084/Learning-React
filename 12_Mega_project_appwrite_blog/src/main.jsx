import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux"
import Store from './Store/Store.js'
import { createBrowserRouter, createRoutesFromElements, Router } from 'react-router-dom'
import Signup from './Components/Signip.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Signup />
  },
 

])
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={Store}>
    <App />
  </Provider>
  // </StrictMode>,
)
