import React from 'react'
import "../styles/Contact.css"
const Contact = () => {
  return (
    <div className='contact-us'>
      <div className='gallery'> <h1>Contact Us</h1></div>
       <div className="container">
  <div className="row ">
    <div className="col-md-6">
     <div className="row justify-content-center">
        <div className="col-md-8">
        <div className="company-address">
        <h3>KITU Headquarters</h3>
        <p>2nd Floor, Brindavan Complex, 1st E Cross Road, 20th Main Rd,BTM 1st Stage, Bengaluru,Karnataka 560068</p>
        <p><b>Mobile :</b>  +91 7019781243</p>
       <p><b>Email :</b> <a href=""> kituhq@gmail.com</a></p>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345090373!2d144.9630576153168!3d-37.814107979751664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577ba1a5733b873!2sMelbourne%20Central!5e0!3m2!1sen!2sau!4v1600926314841!5m2!1sen!2sau"
            width="100%"
            height="250"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0">
          </iframe>
        </div>
      </div>
        </div>
     </div>
    </div>

    <div className="col-md-6 ">
    <div className='message-us'>
    <div className="row justify-content-center">
        <div className="col-md-8">
        <form className='-us'>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile</label>
          <input type="tel" className="form-control" id="mobile" placeholder="Enter your mobile number" />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" className="butt">Send</button>
      </form>
        </div>
     </div>
    </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Contact
