import React from 'react'
import style from "../styles/galary.css"
import { Container } from 'react-bootstrap';
const Galary = () => {
  return (

    <div>
      <section id='galary' data-aos="zoom-out" data-aos-duration="2000">
          <div className='homegalary'>
          
          </div>
          <div className=' namegalary'>
            <h2>Gallery</h2>
          {/* <button>All</button>
          <button>Temple</button>
          <button> Residentail</button>
          <button>Commercial</button> */}
          </div>
        </section>
      <Container>

        <div className='row mt-3 mb-3 ' >
          <div className='col-md-3 mt-2 mb-2  '  data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <img src="/Assets/temple1.jfif" alt="" style={{ height: "200px", width:"100%" }} />
          </div>

          <div className='col-md-3 mt-1 mb-1 ' data-aos="fade-right" data-aos-duration="1000">
            <img src="/Assets/residentail1.jpg" alt="" style={{ height: "200px", width:"100%" }} />
          </div>


          <div className='col-md-3 mt-1 mb-1  ' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <img src="/Assets/temple2.jpg" alt="" style={{ height: "200px", width:"100%" }} />
          </div>

          <div className='col-md-3 mt-1 mb-1  img2' data-aos="flip-right" data-aos-duration="1000">
            <img src="/Assets/temple8.jpg" alt="" style={{ height: "200px", width:"100%" }} />
          </div>

          <div className='col-md-3  mt-1 mb-1 img3' data-aos="flip-left" >
            <img src="/Assets/factory1.jpg" alt="" style={{ height: "200px", width:"100%"}} />
          </div>

          <div className='col-md-3 mt-1 mb-1  img1' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <img src="/Assets/commercial2.jpg" alt="" style={{ height: "200px", width:"100%" }} />
          </div>

          <div className='col-md-3 mt-1 mb-1  img2' data-aos="fade-up" data-aos-duration="3000">
            <img src="/Assets/temple6.jpg" alt="" style={{ height: "200px", width:"100%" }} />
          </div>

          <div className='col-md-3 mt-1 mb-1  img3' data-aos="fade-up" data-aos-duration="3000">
            <img src="/Assets/residential1.jpg" alt="" style={{ height: "200px", width:"100%" }} />
          </div>

          <div className='col-md-3 mt-3 mb-3  img1' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <img src="/Assets/temple4.jpg" alt="" style={{ height: "200px", width:"100%" }} />
          </div>

          <div className='col-md-3 mt-3 mb-3  img1' data-aos="zoom-out-right">
            <img src="/Assets/temple3.jpg" alt="" style={{ height: "200px ", width:"100%" }} />
          </div>
          
          <div className='col-md-3 mt-3 mb-3  img2' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <img src="/Assets/factory.jpg" alt="" style={{ height: "200px", width:"100%" }} />
          </div>

          <div className='col-md-3 mt-3 mb-3   img3' data-aos="flip-left" >
            <img src="/Assets/temple7.jpg" alt="" style={{ height: "200px", width:"100%"}} />
          </div>
        </div>
         </Container>

    </div>

  )
}

export default Galary
