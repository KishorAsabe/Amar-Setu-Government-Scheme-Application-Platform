import React from 'react'
import './App.css'

import { Route, Routes, useNavigate } from "react-router-dom"

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Common/Navbar'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Contact from './pages/Contact'

import Error from './pages/Error'

import OpenRoute from './components/core/Auth/OpenRoute'
import PrivateRoute from './components/core/Auth/PrivateRoute'

const App = () => {


  return (

    <div className='flex min-h-screen w-screen flex-col bg-richblack-900 font-inter'>
      {/* <div> */}

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>

        <Route path="*" element={<Error />} />

      </Routes>
    </div>
  )
}

export default App
