import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import {Calculator} from './Calculator.jsx'
import { UserDashboard } from './pages/UserDashboard.jsx'
import { SignUp } from './pages/SignUp.jsx'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Calculator/>}/>
      <Route path="/user-dashboard" element={<UserDashboard/>} />
      <Route path="/sign-up" element={<SignUp/>} />
    </Routes>
    </BrowserRouter>
  );
}



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App />
  </StrictMode>
)
