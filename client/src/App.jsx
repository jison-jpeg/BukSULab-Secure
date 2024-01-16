import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Laboratories from './pages/Laboratories'

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/laboratories" element={<Laboratories />} />
      </Routes>
    
    </BrowserRouter>
    </>
  )
}
