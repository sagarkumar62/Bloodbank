import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Donate from './Pages/Donate'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App