import React from 'react'
import "../styles/about.css"
const About = () => {
  return (
    <div id='about'>
      <div className="container ">
        <div className="row">
            <div className="col-md-6 ">
                <div className='images'>
                    <img src="/Assets/about.jpg" alt="" />
                </div>
            </div>
            <div className="col-md-6"data-aos="zoom-in" data-aos-easing="ease-in-sine" >
                <div style={{ width:"80%"}} >
                  <h1>About Us</h1>
                    <h3>We Always Want Safe and Healthy Water for Healthy Life.</h3>
                   <p>We know that as water is the most essential element for all living beings, not only humans, and you have to take it regularly, you are searching for the best quality water consisting of natural PH balance and teste. Without these criteria, your health may be in danger sooner or later.</p>

We the Acuasafe team ensure you the purest and healthiest water for daily life with the affordable price. Our QC team regularly monitors and checkup the water quality ensuring you get the best quality.
                </div>
            </div>
        </div>
      </div>

      <section id='about1'>
        <div className="container ">
          <div className="row " data-aos="zoom-in" data-aos-easing="ease-in-sine">
            {/* <div className='img'><img src="" alt="" /></div> */}
          <h1 style={{textAlign:"center" , color:"aqua" }}>What We Do</h1>
            <h3 style={{textAlign:"center", marginTop:"25px"}}>Protect Your Family with Best Water
            Filtering System Services</h3>
            <div className="col-md-3"> <div className='what-we-do'>
             
              <h3>24/7</h3></div> </div>
            <div className="col-md-3"> <div className='what-we-do'>
            
              <h3>ddsda</h3></div> </div>
            <div className="col-md-3"> <div className='what-we-do'>
          
            <h3>24/7</h3></div> </div>
            <div className="col-md-3"> <div className='what-we-do'>
           
            <h3>24/7</h3></div> </div>
        </div>
        </div>
      </section>
    </div>
  
  )
}

export default About
