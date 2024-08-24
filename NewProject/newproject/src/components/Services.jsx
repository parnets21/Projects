import React from 'react'
import "../styles/services.css"
const Services = () => {
  return (
    <div id='service' data-aos="zoom-in" data-aos-easing="ease-in-sine">
        <h1 style={{textAlign:"center",color:"blue", padding:"25px"}}>Service Provided</h1>
      <div className="container ">
        <div className="row">
            <h1 style={{textAlign:"center"}}>What Makes Us Stand Apart?</h1>
            <div className="col-md-3"> <div className='service1'>
              <img src="/Assets/service1.png" alt="" style={{height:"100px",width:"100px"}} />
              <h3>24/7</h3></div> </div>
            <div className="col-md-3"> <div className='service1'>
              <img src="/Assets/service2.png" alt="" style={{height:"100px",width:"100px"}} />
              <h3>Best Quality</h3></div> </div>
            <div className="col-md-3"> <div className='service1'>
            <img src="/Assets/service3.png" alt=""  style={{height:"100px",width:"100px"}}/>
            <h3>24/7</h3></div> </div>
            <div className="col-md-3"> <div className='service1'>
            <img src="/Assets/service4.png" alt=""  style={{height:"100px",width:"100px"}}/>
            <h3>24/7</h3></div> </div>
        </div>
      </div>
    </div>
  )
}

export default Services
