import React, { useEffect } from 'react'
import MyNavbar from './components/MyNavbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Galary from './components/Galary'
import Homepage from './components/Homepage'
import Footer from './components/Footer'
import 'aos/dist/aos.css';
import Aos from 'aos'
import Services from './components/Services'
import Allmetal from './components/Allmetal'
import Whatsapp from './components/Whatsapp'



const App = () => {

  useEffect(() => {
    Aos.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div>
     
     <Whatsapp/>
       <BrowserRouter>
     
      {/* <MyNavbar/> */}
      <Homepage/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<About/>} path='/about'/>
        <Route element={<Contact/>} path='/contact'/>
        <Route element={<Services/>} path='/services'/>
        <Route element={<Galary/>} path='/galary'/>
        <Route element={<Allmetal/>} path='/allmetal'/>
        
        
       </Routes>
       
      </BrowserRouter>
      
     <Footer/> 
    </div>
  )
}

export default App
