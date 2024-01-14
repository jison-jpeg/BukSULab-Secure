import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signin from "./pages/Signin"
import Dashboard from "./pages/Dashboard"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
