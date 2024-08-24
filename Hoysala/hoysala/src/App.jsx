import React, { useEffect } from 'react'
import MyNavbar from './components/MyNavbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import OurProject from './components/OurProject'
import Galary from './components/Galary'
import Homepage from './components/Homepage'
import Footer from './components/Footer'
import 'aos/dist/aos.css';
import Aos from 'aos'


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
     
    
       <BrowserRouter>
      {/* <MyNavbar/> */}
      <Homepage/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<About/>} path='/about'/>
        <Route element={<Contact/>} path='/contact'/>
        <Route element={<OurProject/>} path='/ourproject'/>
        <Route element={<Galary/>} path='/galary'/>
        
       </Routes>
       
      </BrowserRouter>
      
     <Footer/> 
      
    </div>
  )
}

export default App
