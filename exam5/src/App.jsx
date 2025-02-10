import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './pages/NavBar'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routess from './AllRoutes/Routess'

function App() {
 

  return (
    <>
      <BrowserRouter >
      <NavBar />
      <Routess />
      </BrowserRouter>
    </>
  )
}

export default App
