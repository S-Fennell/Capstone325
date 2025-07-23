import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroImage from './components/HeroImage';
import GridImageLink from './components/GridImageLinks';
import InfoBar from './components/InfoBar';
import './App.css';
// my#1gavyn

import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DietPage from './pages/Diet';
import Footer from './components/Footer';
import BuildStrength from './pages/BuildStrength';
import Subscribe from './pages/Subscribe';
import FatLoss from './pages/FatLoss';
import LifeStyleHabits from './pages/LifeStyleHabits';
import Cardio from './pages/Cardio';

function App() {


  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/diet" element={<DietPage/>}/>
      <Route path="/lifestyle" element={<LifeStyleHabits/>}/>
      <Route path="/strength" element={<BuildStrength/>}/>
      <Route path="/fatloss" element={<FatLoss/>}/>
      <Route path="/cardio" element={<Cardio/>}/>
      <Route path="/subscribe" element={<Subscribe/>}/>
    </Routes>
    {/* <Footer/> */}
    </>
  )
}

export default App
