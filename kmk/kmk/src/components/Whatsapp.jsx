import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import "../styles/whatsapp.css";
const Whatsapp = () => {
  return (
    <div className='whatsapp' >
    <a href='https://wa.link/cb9r75'> <FaWhatsapp style={{fontSize:"50px",color:"green"}}  onClick={()=>{
        
     }} /></a>
    </div>
  )
}

export default Whatsapp
