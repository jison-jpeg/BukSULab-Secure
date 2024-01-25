import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Laboratories from './pages/Laboratories'
import Attendance from './pages/Attendance'
import Instructors from './pages/Instructors'
import Schedule from './pages/Schedule'
import Reports from './pages/Reports'
import Profile from './pages/Profile'
import Contact from './pages/Contact'
import Users from './pages/Users'
import AuditLogs from './pages/AuditLogs'

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/laboratories" element={<Laboratories />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/users" element={<Users />} />
        <Route path="/logs" element={<AuditLogs />} />




      </Routes>
    
    </BrowserRouter>
    </>
  )
}
