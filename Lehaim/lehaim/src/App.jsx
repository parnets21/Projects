import React, { useEffect } from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import 'aos/dist/aos.css';
import Aos from 'aos'
import Faq from './components/Faq';



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
       <About/>
             <Faq/>
      
    </div>
  )
}

export default App
