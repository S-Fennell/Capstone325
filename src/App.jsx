import { useState } from 'react'

import Navbar from './components/Navbar'
import HeroImage from './components/HeroImage'
import GridImageLink from './components/GridImageLinks'
import InfoBar from './components/InfoBar'
import './App.css'
import SignIn from './pages/signIn'
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import DietPage from './pages/Diet'
import Footer from './components/Footer'
import BuildStrength from './pages/BuildStrength'

function App() {


  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/diet" element={<DietPage/>}/>
       <Route path="/strength" element={<BuildStrength/>}/>
    </Routes>
    {/* <Footer/> */}
    </>
  )
}

export default App
