// ContactUs.js
import React from 'react';
import '../styles/contact.css'; // Import your CSS file

const ContactUs = () => {
    return (
        <div className="contact-us-container">
            <div className='ourservice'><h1 className='animatedText '>Contact Us</h1></div>
          
            <div className="contact-content">
                <div className="contact-row">

              
                    <section className="contact-info">
                        <h2 className="section-title">Contact Information</h2>
                        <address>
                            <p><strong>Regd Office:</strong><br /> #100, Ravi Nagar Gokul Road 
                             Hubli-580030
                             GSTIN: 29CYLPM7666R1Z0</p>
                            <p>
                             
                             </p>
                            < p><b>Branch Office:</b> <br />
             No : 194 1ST Floor J Lingaiah Road
             Seshadripuram Bengaluru-560020
          </p>
                            <p><strong>Phone:</strong> +91 9606382909</p>
                            <p><strong>E-mail:</strong> <a href="">ivoryassociates.rok@gmail.com</a></p>
                        </address>
                        <div className="map">
                            <iframe
                                title="Office Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0299384380696!2d-122.42149108468264!3d37.774929279759674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807e7d788e97%3A0x1056de519c0b1d6!2sIvory%20Associates!5e0!3m2!1sen!2sus!4v1614084685372!5m2!1sen!2sus"
                                width="100%"
                                height="400"
                                style={{ border: 0, borderRadius: '8px' }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </section>
                    <section className="contact-form">
                        <h2 className="section-title">Contact Form</h2>
                        <form action="#">
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone:</label>
                                <input type="tel" id="phone" name="phone" placeholder="Your Phone" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
                            </div>

                            <button type="submit">Send Message</button>
                        </form>
                    </section>
                </div>
                {/* <section className="social-media">
                    <h2 className="section-title">Follow Us</h2>
                    <div className="social-links">
                        <a href="https://www.facebook.com/IvoryAssociates" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i> Facebook
                        </a>
                        <a href="https://twitter.com/IvoryAssociates" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i> Twitter
                        </a>
                        <a href="https://www.linkedin.com/company/ivoryassociates" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i> LinkedIn
                        </a>
                        <a href="https://www.instagram.com/IvoryAssociates" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i> Instagram
                        </a>
                    </div>
                </section> */}
            </div>
        </div>
    );
};

export default ContactUs;
