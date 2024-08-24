import React from 'react'
import MyNavbar from './components/Navbar'
import Home from './components/Home'
import Service from './components/Service'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import the AOS styles
import Whatsapp from './components/Whatsapp'

    
const App = () => {
  useEffect(() => {
    AOS.init({
        duration: 2000, // Animation duration in milliseconds
        once: true,     // Whether animation should happen only once - while scrolling down
        mirror: false,  // Whether elements should animate out while scrolling past them
    });
}, []);
  return (
    <div>
   <MyNavbar/>
   
     <BrowserRouter>
     <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<About/>} path='/about'/>
      <Route element={<Service/>} path='/service'/>
      <Route element={<Contact/>} path='/contact'/>
     </Routes>
     </BrowserRouter>
    <Whatsapp/>
   <Footer/>

    </div>
  )
}

export default App
