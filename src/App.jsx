import { useState } from 'react'

// import Navbar from './components/Navbar'
import HeroImage from './components/HeroImage'
import GridImageLink from './components/GridImageLinks'
import InfoBar from './components/InfoBar'
import './App.css'
import SignIn from './pages/signIn'
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import DietsPage from './pages/DietsPage'

function App() {


  return (
    <>
    <Routes>
      <Route path = "/" element={<LandingPage/>}/>
      <Route path = "/bestdiet" element={<DietsPage/>}/>
      
    </Routes>
    <LandingPage/>
    </>
  )
}

export default App
