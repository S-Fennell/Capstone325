import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroImage from './components/HeroImage'
import GridImageLink from './components/GridImageLinks'
import InfoBar from './components/InfoBar'
import './App.css'

function App() {


  return (
    <>
    <Navbar/>
    <HeroImage/>
    <InfoBar/>
    <GridImageLink/>
    </>
  )
}

export default App
