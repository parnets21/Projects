import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../styles/home.css";
import SignInPage from "./SignInPage"
import Modal from './Modal';
import Whatsapp from './Whatsapp';
import ScrollButtons from './ScrollButtons';
const Home = () => {

  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);
  


  return (
    <div className='containerx'>
        <ScrollButtons/>
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
              <h3>Welcome to Our Service</h3>
              <p>Experience the best with us.</p>
              <a href="/booknow"><button className="carousel-btn" >Book Now</button></a>
              {/* <Modal isOpen={isModalOpen} onClose={closeModal}>
        <SignInPage />
      </Modal> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-img-container">
              <img
                className="d-block w-100 imgcorousel"
                src="../Assets/carouselimg1.jpg"
                alt="Second slide"
              />
              <div className="carousel-overlay"></div>
            </div>
            <Carousel.Caption>
              <h3>Quality You Can Trust</h3>
              <p>Your satisfaction is our priority.</p>
              <a href="/booknow"><button className="carousel-btn" >Book Now</button></a>
              {/* <Modal isOpen={isModalOpen} onClose={closeModal}>
        <SignInPage />
      </Modal> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      <Whatsapp/>
    </div>
  );
};

export default Home;
