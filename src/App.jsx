import { useState } from 'react'
import Card from "./components/card"
import Navbar from "./components/navbar"
import "./App.css"
import Person from "./page/person"
import Search from "./page/search"

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<Card />} exact />
    <Route path=":id" element={<Person />} />
    <Route path="search" element={<Search />} />
    </Routes>
    </BrowserRouter>
    <ToastContainer theme="dark" />
    </div>
  )
  }

export default App
