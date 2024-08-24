import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "../styles/home.css";
import WorkProcess from './WorkProcess';
import MajorSector from './MajorSector';
import Achievement from './Achievement';
import Introduction from './Introduction';
const Home = () => {


    const servicesData = [
        {
          title: "Debt Recovery",
          description: "Efficient and reliable debt recovery services to help you manage outstanding debts.",
          link: "/services/debt-recovery"
        },
        {
          title: "Enforcement",
          description: "Professional enforcement services to ensure compliance and legal actions.",
          link: "/services/enforcement"
        },
        {
          title: "Skip Tracing",
          description: "Locate individuals quickly and accurately with our skip tracing services.",
          link: "/services/skip-tracing"
        }
      ];

  return (
    <div className='containerx'>
    {/* <ScrollButtons/> */}
  <section id='headingcarouse'>
    <Carousel fade>
      <Carousel.Item>
        <div className="carousel-img-container">
          <img
            className="d-block w-100 imgcorousel"
            src="../Assets/carouselimg2.jpg"
            alt="First slide"
          />
          <div className="carousel-overlay"></div>
        </div>
        <Carousel.Caption>
       <h4 className="carousel-text-animation text-center">"Ultimate Resolutions for Debt Recovery & Enforcement"</h4>
       <a href="/service"><button href='/about' className="carousel-btn" >Know More</button></a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-img-container">
          <img
            className="d-block w-100 imgcorousel"
            src="../Assets/carouselimg2.jpg"
            alt="Second slide"
          />
          <div className="carousel-overlay"></div>
        </div>
        <Carousel.Caption>
        <div className='ultimate'>
        <h4 className="carousel-text-animation text-center">"Ultimate Resolutions for Debt Recovery & Enforcement"</h4>
        </div>
        <a href="/service"><button href='/about' className="carousel-btn">Know More</button></a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </section>

   <section>
   <Introduction/>
   </section>

       <section id='ourservice'>
       <Container className=" os">
      <h1 className="text-center mb-4 introduction " >Our Services</h1>

      <div className="row">
        <div className="col-md-4 p-3">
          <img src="/Assets/s1.jpg" alt="" className='serviceimg'/>
         <div className='imgcard'>
          <h4>Debt Recovery</h4>
          <a href="/service"><button className="custom-button" >Know More</button></a>
          </div>
        </div>
        <div className="col-md-4 p-3">
          <img src="/Assets/s2.jpg" alt="" className='serviceimg' />
          <div className='imgcard'>  
            <h4>Enforcement</h4>
            <a href="/service"><button className="custom-button" >Know More</button></a>
          </div>
        </div>
        <div className="col-md-4 p-3 ">
          <img src="/Assets/s3.jpg" alt="" className='serviceimg'/>
          <div className='imgcard'>
            <h4>Legal Assistance</h4>
            <a href="/service"><button className="custom-button" >Know More</button></a>
          </div>
        </div>
      </div>
    </Container>
       </section>

       <section>
       <WorkProcess/>
       </section>

       <section>
       <MajorSector/>
       </section>

       <section>
        <Achievement/>
       </section>

</div>
  )
}

export default Home
