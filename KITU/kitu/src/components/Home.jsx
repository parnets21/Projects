import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Home.css"
import LatestNews from './LatestNews';
import MostPopular from './MostPopular';
import Modal from './Modal';
const Home = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div style={{padding:"0 12px"}}>
      {/* <Carousel>
       
        <Carousel.Item>
          <img
            className="d-block w-100 carouselimg"
            src="/Assets/carouselimg1.jpeg"
            alt="Second slide"
          
          />
          <Carousel.Caption className="carousel-caption">
            <h3>Second Slide Title</h3>
            <p>Description for the second slide.</p>
            <div className='carouselbutton'>
          
      <button onClick={() => setShowModal(true)} className='footer-joinus'>Join Us</button>
      
 
              <button>Donate</button>
            </div>
          </Carousel.Caption>
          <Modal show={showModal} onClose={() => setShowModal(false)} />
        </Carousel.Item>
      </Carousel> */}

     <section id='section2'> 
         <LatestNews/>
     </section>
     

      <section id='section3'>
       <MostPopular/>
      </section>


      <section id='section4'>
        
        <div className="row">
        <div className='ourevent'> <h3>Our Gallery</h3></div>
          <div className="col-md-8 ">
            <div className="row justify-content-center">
              <div className="col-md-8">
              <Carousel>
            {/* <Carousel.Item>
                <img
                    className="d-block w-100 eventimage"
                    src="/Assets/image1.jpg"
                    alt="First slide"
                    style={{height:"400px",width:"100%"}}
                />
            </Carousel.Item> */}
            <Carousel.Item>
                <img
                    className="d-block w-100 eventimage"
                    src="/Assets/image2.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 eventimage"
                    src="/Assets/image3.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 eventimage"
                    src="/Assets/image4.jpg "
                    alt="Fourth slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 eventimage"
                    src="/Assets/image5.jpg"
                    alt="Fifth slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 eventimage"
                    src="/Assets/image6.jpg"
                    alt="Sixth slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 eventimage"
                    src="/Assets/image7.jpg"
                    alt="Seventh slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 eventimage"
                    src="/Assets/image8.jpg"
                    alt="Eighth slide"
                />
            </Carousel.Item>
        </Carousel>
              </div>
            </div>
           
          </div>
          
          <div className="col-md-4 ">
          <div className="row justify-content-center">
            <div className="col-md-11">
            <h3  className='latestnewsxxx'>Check Youtube</h3 >
              <div className='all-youtube-link'>
              <a href="www.youtube.com">
              <div className="video-link">
              <i className="fab fa-youtube" style={{color:"red",fontSize:"18px"}}></i>
              <p>https://www.youtube.com/watch?v=5ic4_KSggdsffddfdffd</p>
              </div>
               </a>
              
            <a href="www.youtube.com">
              <div className="video-link">
              <i className="fab fa-youtube" style={{color:"red",fontSize:"18px"}}></i>
              <p>https://www.youtube.com/watch?v=5ic465_KSgg</p>
              </div>
               </a>
            <a href="www.youtube.com">
              <div className="video-link">
              <i className="fab fa-youtube" style={{color:"red",fontSize:"18px"}}></i>
              <p>https://www.youtube.com/watch?v=5ic465_KSgg</p>
              </div>
               </a>
            <a href="www.youtube.com">
              <div className="video-link">
              <i className="fab fa-youtube" style={{color:"red",fontSize:"18px"}}></i>
              <p>https://www.youtube.com/watch?v=5ic465_KSgg</p>
              </div>
               </a>
            <a href="www.youtube.com">
              <div className="video-link">
              <i className="fab fa-youtube" style={{color:"red",fontSize:"18px"}}></i>
              <p>https://www.youtube.com/watch?v=5ic465_KSgg</p>
              </div>
               </a>
               </div>
            </div>
          </div>
          </div>
        </div>
      
      </section>


    </div>
  );
};

export default Home;
