import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import AccessoriesPage from './pages/accessories'
import HomePage from './pages/home'
import { Routes, Route } from 'react-router-dom'
import RepairPage from './pages/repair'

function App() {
  

  return (
    <>
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/repair" element={<RepairPage/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
