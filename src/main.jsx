import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import axios from "axios"
import {Calculator} from './Calculator.jsx'
import { UserDashboard } from './pages/UserDashboard.jsx'
import { SignUp } from './pages/SignUp.jsx'

export default function App() {

  //waits for axios to fetch array containing fruits and stores in res variable
  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    console.log(response.data.fruits);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

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
