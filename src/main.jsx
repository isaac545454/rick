import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Person from "./components/person"
import Search from "./components/search"
import Navbar from "./components/navbar"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      
    <Route path="/" element={<App />} exact />
    <Route path=":id" element={<Person />} />
    <Route path="search" element={<Search />} />
  
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
