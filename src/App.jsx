import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroImage from './components/HeroImage'
import GridImageLink from './components/GridImageLinks'
import InfoBar from './components/InfoBar'
import './App.css'
import SignIn from './pages/signIn'

function App() {


  return (
    <>
    <Navbar/>
    <HeroImage/>
    <InfoBar/>
    <GridImageLink/>
    <SignIn/>
    </>
  )
}

export default App
