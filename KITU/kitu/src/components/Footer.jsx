import React, { useState } from 'react'
import "../styles/Footer.css"
import Modal from './Modal';
const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div >
      <div className="footer ">
  <div className="footer-container container">
    
    <div className="footer-column">
      <h3>About Us</h3>
      <p>The First General Body meeting of the Karnataka State IT/ITeS Employees’ Union (KITU) had convened at YWCA Hall, Koramangala, Bangalore, on 20/08/2017. The union received the registration certificate from Labour Department on 7/10/2017.</p>
    </div>
    <div className="footer-column">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="event">Event</a></li>
        <li><a href="gallery">Gallery</a></li>
        <li><a href="contact">Contact</a></li>
      </ul>
    </div>
    <div className="footer-column">
      <h3>KITU </h3>
      <div>
      
      
    </div>
    <div>
      <button onClick={() => setShowModal(true)} className='footer-joinus'>Join Us</button>
      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </div>
      <div> <a href=""><button className='footer-donate'>Donate</button></a></div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Footer
