import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/NavigationBar'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import OurEvent from './components/OurEvent'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import DetailsNews from './components/DetailsNews'

const App = () => {
  return (
    <div>
     
      {/* <Home/> */}
      <BrowserRouter>
      <Header/>
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<About/>} path='/about'/>
        <Route element={<OurEvent/>} path='/event'/>
        <Route element={<Gallery/>} path='/gallery'/>
        <Route element={<Contact/>} path='/contact'/>
        <Route element={<DetailsNews/>} path='/detailsnews' />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
