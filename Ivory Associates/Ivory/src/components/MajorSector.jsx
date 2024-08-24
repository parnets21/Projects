import React from 'react'
import '../styles/major.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
const MajorSector = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  

  return (
      <div className='major' >
       <div className="container" style={{width:'100%',overflow:'hidden'}}>
       <div className='majorsector' style={{width:'100%',overflow:'hidden'}}> <h1  > Our Major Sector</h1></div>
      <Slider {...settings}>
      <div>
        <img src="/Assets/sbfc.jpg" alt="" className='clientslogo' />
      </div>
      <div>
        <img src="/Assets/chola.png" alt="" className='clientslogo'/>
      </div>
      <div>
        <img src="/Assets/jana.jpg" alt="" className='clientslogo'/>
      </div>
      <div>
        <img src="/Assets/muthoot.png" alt="" className='clientslogo'/>
      </div>
      <div>
        <img src="/Assets/vastu.avif" alt="" className='clientslogo'/>
      </div>
     
    </Slider>
      </div>
      </div>
  )
}

export default MajorSector
