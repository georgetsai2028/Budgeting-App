import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import {Calculator} from './Calculator.jsx'
import { UserDashboard } from './pages/UserDashboard.jsx'

const root = document.getElementById("root");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Calculator />
    <UserDashboard />
    </BrowserRouter>
  </StrictMode>,
)
