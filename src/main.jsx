import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import {Calculator} from './Calculator.jsx'
import { UserDashboard } from './pages/UserDashboard.jsx'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Calculator/>}/>
      <Route path="./pages/UserDashoard" element={<UserDashboard/>} />
    </Routes>
    </BrowserRouter>
  );
}

const root = document.getElementById("root");

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App />
  </StrictMode>,
)
