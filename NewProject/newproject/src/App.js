import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Services from './components/Services';
import Galary from './components/Galary';
import BookNow from './components/BookNow';
import Address from './components/Address';
import PaymentPage from './components/PaymentPage';
import Move from './components/Move';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import OrderSuccess from './components/OrderSuccess';
import ScrollButtons from './components/ScrollButtons';
import Download from './components/Download';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
    });
  }, []);
 
  return (
    <div className="App">
       {/* <Download/> */}
      <Navbar/>
      {/* <ScrollButtons/> */}
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<>
      <Home/>
      <About/>
      <Services/>
      <Galary/>
      <Contact/>
      <Download/>
      </>
    } />
          <Route  path='/booknow' element={<BookNow/>}/>
          <Route path='/address'  element={<Address/>} />
          <Route  path='/payment' element={<PaymentPage/>}/>
          {/* <Route  path='/contact' element={<Contact/>}/> */}
          <Route  path='/ordersuccess' element={<OrderSuccess/>}/>
          {/* <Route element={<Download/>} path='/download'/> */}

        </Routes>
      </BrowserRouter>

      <Move/>
      <Footer/> 
      
    </div>
  );
}

export default App;
