import { width } from '@fortawesome/free-brands-svg-icons/fa42Group'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import '../styles/home.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import Whatsapp from './Whatsapp';


const testimonials = [
  { id: 1, text: "“They helped lead me through the process of system   selection, site layout and place my order. They were informed and has provided guidance each step Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam laborum praesentium, rem harum sapiente eius repellendus inventore fugit culpa error? Odit asperiores possimus ratione ipsa aut accusantium minima consequuntur quos!.each step Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam laborum praesentium, rem harum sapiente eius repellendus inventore fugit culpa error? Odit as”.", author: "John Doe" },
  { id: 2, text: "They helped lead me through the process of system   selection, site layout and place my order. They were informed and has provided guidance each step Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam laborum praesentium, rem harum sapiente eius repellendus inventore fugit culpa error? Odit asperiores possimus ratione ipsa aut accusantium minima consequuntur quos!", author: "Jane Smith" },
  { id: 3, text: "They helped lead me through the process of system   selection, site layout and place my order. They were informed and has provided guidance each step Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam laborum praesentium, rem harum sapiente eius repellendus inventore fugit culpa error? Odit asperiores possimus ratione ipsa aut accusantium minima consequuntur quos!", author: "Jim Brown" },
  // Add more testimonials here
];
const Home = () => {
   
  let navigate=useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }

 // Slick settings
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
    <div>
     
      <section id='headingcarouse'>
        <Carousel fade>
          <Carousel.Item >
            <img
              className="d-block w-100 imgcorousel"
              src="../Assets/kmkimg13.jpg"
              alt="kmk" 
            />
            <Carousel.Caption>
             <div className='headingcarousel'>
             <h6>Reduce | Reuse | Recycle</h6>
             <h1>Thought Solution to <br /> Safe Environment</h1>
             </div>
              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <button>Learn More</button> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 imgcorousel "
              src="../Assets/kmkimg7.jpg"
              alt="kmk"
               />
            <Carousel.Caption>
              <div className='headingcarousel'>
              <h6>Welcome to KMK Industries</h6>
              <h1>We Provide Recycling</h1>
              </div>
              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <button>Learn More</button> */}

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      <Container>
            <div className='disposal'>
              <div className='row'>
          <div className='col-md-6'>
            <div data-aos="zoom-in" data-aos-duration="2000">
              <div className='waste'>
                <p>Waste Disposal & Recycling Services in Commercial & Domestic</p>
              </div>
              <div className='poineers'><h1>The Pioneers In The <br /> Recycling Service!</h1></div>
              <div className='providing'><p>We are providing the effectively waste disposal & recycling service with our modern technologies, we serve commonly, client first priority.</p></div>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='token'><i class="fa-solid fa-calendar-days"></i></div>
                  <div className='ontime'><p>Ontime <br /> Scheduled</p></div>
                </div>
                <div className='col-md-6'>
                  <div className='token'><i class="fa-solid fa-clock"></i></div>
                  <div className='ontime'><p>24/7 <br />Services</p></div>
                </div>
              </div>
              {/* <div className='learn'> <button>Learn More</button></div> */}
            </div>
          </div>
          <div className='col-md-6'  data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg3.jpg" alt="" className='imgcon' />
          </div>
        </div>
            </div>
        </Container>



        <section id='ourservices'>
        <div className="container">
          <div className='our' >
            <h1>Our Services</h1>
         <div className='services'>
         <div className='row'>
            <div className='col-md-6'>
            <div className='cardimg'>
            <Card  data-aos="zoom-in" data-aos-duration="2000">
      <Card.Img variant="top" src="/Assets/kmkimg16.jpg"  style={{height:"300px", width:"375px"}} />
      <Card.Body>
        <Card.Title>IT Assets Disposition</Card.Title>
        <Card.Text>
        Managing outdated or unused IT assets can be a challenge.  
        </Card.Text>
       <a href="/services"> <Button variant="primary">Learn More</Button></a>
      </Card.Body>
    </Card>
            </div>
            </div>
            <div className='col-md-6'>
          <div className="cardimg">
          <Card data-aos="zoom-in" data-aos-duration="2000">
      <Card.Img variant="top" src="/Assets/imgkmk13.jpg" style={{height:"300px",width:"375px"}}/>
      <Card.Body>
        <Card.Title>All Metal Disposition</Card.Title>
        <Card.Text>
        KMK Industries is your trusted partner for all metal disposition needs
        </Card.Text>
       <a href="/allmetal"><Button variant="primary">Learn More</Button></a>
      </Card.Body>
    </Card>
          </div>
            </div>
          </div>
         </div>
          </div>
        </div>
        </section>
 
    <section id='recycling'>
     <div className="container">
    
    <div className='wastage'>
    <div className="row">
          <div data-aos="zoom-in"data-aos-duration="2000" className="col-md-6">
            <div className='environment'>
            <p>Recycling Wastage Save Environment!</p>
            <h1>Simple Steps Wastage <br />
            to Recycling Item <br />Processing</h1>
            </div>
          </div>
          <div data-aos="zoom-in"data-aos-duration="2000"className="col-md-6">
          <div className='environment1'>
          <p>Recycling is the process of converting waste materials into new materials and objects. To do this, recycling often requires both machinery and employees to correctly sort recyclable items based on the material they’re made of.</p>
          <p>This Waste Management video shows the step-by-step process of how materials are processed once they reach a facility.</p>
          <div className='butt'>
          <button onClick={()=>{
            navigate("/contact")
        }} className='butt1'>Get Started</button>
          </div>
          </div>
          </div>
        </div>
    </div>
     

    <div className='dabba'>
    <div className="row">
          <div className="col-md-3">
      
           <div className='collection'  data-aos="zoom-in">
            <div>
            <img src="/Assets/wastagecoll.jpg" alt="" />
            </div>
            <div><h5>Collection</h5></div>
           <div>  <p>We arrange for the collection of e-waste and metal scrap from your location.</p></div>
           </div>
          </div>
          <div className="col-md-3">
         <div className='collection'  data-aos="zoom-in">
            <div>
              <img src="/Assets/pickup.jpg" alt="" />
            </div>
            <div><h5>Security</h5></div>
            <div>
            <p>Our logistics team ensures safe and secure transportation to our recycling facilities.</p>
            </div>
         </div>
          </div>
          <div className="col-md-3">
           <div>
            <div className='collection'  data-aos="zoom-in">
            <div>
              <img src="/Assets/reduce.jpg" alt="" />
            </div>
            <div><h5>Processing</h5></div>
            <div><p>Upon arrival at our facility, e-waste and metals are sorted based on material type and condition	</p></div>
            </div>
           
           </div>
          </div>
          <div className="col-md-3">
           <div className='collection'  data-aos="zoom-in">
            <div>
            <img src="/Assets/recycling.jpg" alt="" />
            </div>
            <div><h5>Recycling</h5></div>
            <div><p>Non-reusable e-waste and metals are processed through environmentally friendly recycling methods.</p></div>
           </div>
          </div>
        </div>
    </div>
    </div>
    </section>

    <section id='choose'>
           <div className="container">
           <div className='us'>
            <div className="row">
              <div className="col-md-6">
                <img data-aos="zoom-in"data-aos-duration="2000" src="/Assets/imgkmk2.jpg" alt="" className='imgcon'/>
              </div>
              <div data-aos="zoom-in"data-aos-duration="2000" className="col-md-6">
                <div>
                  <div className='whychoosekmk'><h2>Why Choose KMK?</h2></div>
                  <div><p>At KMK Industries, we understand the critical importance of responsible e-waste and metal recycling. Here are some compelling reasons to choose us for your recycling needs:</p></div>
                  <div>
                    <h6>1.Expertise and Experience:</h6>
                  <p>With years of experience in the industry, we have the knowledge and skills to handle all types of e-waste and metal recycling</p>
                  <h6>2.Secure Data Destruction:</h6>
                  <p>Data security is a top priority for us. Our secure data destruction methods ensure that all sensitive information is permanently erased, giving you peace of mind.</p>
                  <h6>3.Customized Solutions:</h6>
                  <p>Whether you are a small business or a large corporation, we offer customized solutions to fit your needs.</p>
                  <h6>4.Efficient Logistics:</h6>
                  <p>Our efficient collection and transportation services make it easy for you to dispose of your e-waste and metal scrap.</p> 
                  {/* <h6>5.	Customer Satisfaction:</h6> */}
                 {/* <p>Our commitment to customer satisfaction drives everything we do. We strive to exceed your expectations with our exceptional service and high-quality recycling solutions.</p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className='knowmore'><a href=""><button onClick={()=>{
              navigate("/about")
            }}>Know More Abous Us</button></a></div>
           </div>
           </div>
    </section>

    <section id='ourclients'>
      <div className='ourclients' data-aos="zoom-in">
        <h1>Our Clients</h1>
      </div>
      <div className="container">
        <Slider {...settings}>
          <div>
            <img src="/Assets/client1logo.png" alt="Client 1" className='clientslogo' />
          </div>
          <div>
            <img src="/Assets/client2logo.png" alt="Client 2" className='clientslogo' />
          </div>
          <div>
            <img src="/Assets/client3logo.png" alt="Client 3" className='clientslogo' />
          </div>
          <div>
            <img src="/Assets/client4logo.png" alt="Client 4" className='clientslogo' />
          </div>
          <div>
            <img src="/Assets/client5logo.png" alt="Client 5" className='clientslogo' />
          </div>
          <div>
            <img src="/Assets/client6logo.png" alt="Client 6" className='clientslogo' />
          </div>
          <div>
            <img src="/Assets/client7logo.png" alt="Client 7" className='clientslogo' />
          </div>
          <div>
            <img src="/Assets/client8logo.png" alt="Client 8" className='clientslogo' />
          </div>
          <div>
            <img src="/Assets/client9logo.png" alt="Client 9" className='clientslogo' />
          </div>
          <div>
            <img src="/Assets/client10logo.png" alt="Client 10" className='clientslogo' />
          </div>
        </Slider>
      </div>
    </section>


    <section id='testimonials'>
             <div className='container'>
            <div className='customer'>
              <h1>Customer Says</h1>
            </div>
           <div className="row">
            <div className="col-md-6 test" >
                <div className="carousel">
      <button className="carousel-button" onClick={goToPrevious}>{"<"}</button>
      <div className="carousel-content">
        <p>{testimonials[currentIndex].text}</p>
        <p><em>- {testimonials[currentIndex].author}</em></p>
      </div>
      <button className="carousel-button" onClick={goToNext}>{">"}</button>
    </div>
            </div>
           </div>
             </div>
    </section>
    </div>
  )
}

export default Home
