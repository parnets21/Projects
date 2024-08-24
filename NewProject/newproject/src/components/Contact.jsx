import React from 'react'
import "../styles/contact.css"
const Contact = () => {
  return (
    <div className="container" id='contact'>
     <div class="booking-container" data-aos="zoom-in" data-aos-easing="ease-in-sine" >
    <div class="left-content">
        {/* <span class="certification">ISO 9001:2015 CERTIFIED</span> */}
        <h1>Book Your Water Tanker at Lowest Price</h1>
        <p>
            Get Safe and Quality Water With Our Fast Delivery Service in all over Mumbai at your Doorstep. 
            Book Water Tanker by :- Call / Whatsapp / Website 24/7.
        </p>
        <div class="action-buttons">
            <button class="call-btn">📞 Callback</button>
            {/* <button class="whatsapp-btn">📱 Whatsapp</button> */}
        </div>
    </div>
    <div class="right-content">
        <p>Please Enter your details below, our representative will contact you shortly and give you a best deal!</p>
        <form action="#" >
            <div class="form-group">
                <label for="name">Name *</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div class="form-group">
                <label for="mobile">Mobile Number *</label>
                <input type="tel" id="mobile" name="mobile" placeholder="081234 56789" required />
            </div>
            <div class="form-group">
                <label for="email">Message</label>
                <textarea name="" id="message" placeholder="Enter Your Message"></textarea>
                {/* <input type="email" id="email" name="email" placeholder="Optional" /> */}
            </div>
            <button type="submit" class="submit-btn">Submit</button>
        </form>
    </div>
</div>

    </div>

  )
}

export default Contact
