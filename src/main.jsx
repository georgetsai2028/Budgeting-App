import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import {Calculator} from './Calculator.jsx'
import UserDashboard from './pages/UserDashboard.jsx'

const router = createBrowserRouter([
  {
    path:"./pages/UserDashboard.jsx",
    element: <UserDashboard />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Calculator />
  </StrictMode>,
)
