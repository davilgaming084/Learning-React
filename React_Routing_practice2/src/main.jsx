import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from '../src/Components/Home.jsx'
import About from './Components/About.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Context from './Components/Context.jsx'
import Github from './Components/Github.jsx'

async function fetchGithubUser() {
  try {
    const response = await fetch('https://api.github.com/users/davilgaming084');
    
    if (!response.ok) {
      throw new Response('Failed to fetch user data', { status: response.status });
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    throw new Response('Error fetching GitHub user', { status: 500 });
  }
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contect' element={<Context />} />
      <Route path='/github' element={<Github />} loader={fetchGithubUser} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
