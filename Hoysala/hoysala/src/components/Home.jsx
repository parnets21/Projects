import React from 'react'
// import style from "../styles/home.module.css"
import '../styles/home.css'
import {useNavigate} from "react-router-dom"
import { Container} from 'react-bootstrap';

const Home = () => {
     let navigate=useNavigate();

     let formHandle=()=>{
          navigate("/ourproject")
     }
     let about=()=>{
          navigate("/about")
     }
     let formoredetails=()=>{
      navigate('/contact')
     }

     let getquote=()=>{
      navigate('/contact')
     }
  return (
    
    <div >
      <section id='image'>
          <div className="container">
          <div className='row'>
               <div className='col-md-8  heading'  >
               <h1 >Hoysala Constructions </h1>
                <h2>for everyone</h2>  
               <p className='founded'>Founded in 1991 by R. Raghunath, Hoysala Construction <br />
                has established itself as a premier construction company <br /> with a strong commitment to excellence, quality, and client satisfaction.</p>
               <button onClick={getquote}>Get Quote</button>  
               </div>
          </div>
          </div>
     </section>
     <section id='details'>
        <div className='container'>
     <div className='row'>
        <div className='col-md-12 detail '>
        <div className='row'>
        <div className='col-md-3 x'>
          <h1>150+</h1>
          <h2> Completed Projects</h2>
          </div>
          <div className='col-md-3 y'>
          <h1>25+</h1>
          <h2>  Years of Experience</h2>
          </div>
          <div className='col-md-6 z'>
               <div className='row r1'>
               <h2>We Construct Planning Manage and Designing Places and Infrastructures</h2>
               </div>
               <div className='row r2'>
              <div className='col-md-1  tool1'>
              <img src="/Assets/tool1.svg" height="70px" width="80px" alt="" />
              </div>
              <div className='col-md-4  text1'>
              <h3>General Contract</h3>
              <p>We manage all aspects of the construction process, ensuring projects are completed on time and within budget</p>
              </div>
               </div>
               <div className='row r3'>
                    <div className='col-md-1 tool2'>
                         <img src="/Assets/tool2.svg" height="70px" width="80px" alt="" />
                    </div>
                    <div className='col-md-4 text2'>
                    <h3>Project Planning</h3>
                    <p>Our expert team oversees every phase of the project, ensuring seamless coordination and execution.</p>
                    </div>
               </div>
               <div className='row r4'>
               <div className='col-md-1 tool3'>
                         <img src="/Assets/tool3.svg" height="70px" width="80px" alt="" />
                    </div>
                    <div className='col-md-4 text3'>
                    <h3>Design and Build</h3>
                    <p>We provide end-to-end solutions from initial concept and design to final construction.</p>
                    </div>
               </div>
          </div>
        </div>
        </div>
     </div>
        </div>
     </section>
     <section id='about'>
          <div className="container">
        <div className='row about'>
          <div className='col-md-6 img'>
               <img src="/Assets/image1.jpg" alt="" />
          </div>
          <div className='col-md-6 content '>
               <div className='row a'>
                    <h3>Why Choose Us?</h3>
               </div>
               <div className='row b'>
                     <p className='awards'>"We Won Indira Priyadarshini Award"</p>
                    <p>Our commitment to excellence has been recognized with prestigious awards, including.</p>
                    <p><b>Indira Priyadarshini Award (1994), presented by President of India, Mr. Shankar Dayal Sharma.</b></p>
               </div>
               <div className='row c'>
                    <p><b>•Experienced Team: </b>Our team of skilled professionals brings expertise, innovation, and dedication to every project</p>
                    <p><b>•Quality Assurance:</b> We adhere to the highest standards of quality, ensuring durable and superior constructions.</p>
                    <p><b>•Client-Centric Approach: </b> We prioritize our clients' needs and work closely with them to achieve their vision.</p>
                 <p><b> •Timely Delivery: </b>We are committed to completing projects on schedule without compromising on quality</p>
                <p><b>•Safety Standards:</b> We maintain strict safety protocols to ensure a safe working environment for our team and clients.</p>
               </div>
               <div className='row e'>
               <button onClick={about}>Know More About Us</button>
               </div>
          </div>
        </div>
          </div>
     </section>
     <section id='specialproject'>
          <Container>
               <div className='works'>
                    <h3>Our Works</h3>
                    <h1>Our Special Projects</h1>
               </div>
          <div className='row'>
            <div className='col-md-4 mt-3'>
                <div className="image-container" data-aos="fade-down-right" data-aos-duration="1000">
                    <img src="/Assets/temple1.jfif" alt="" style={{ height: "300px", width: "100%" }} />
                    <div className="image-overlay">
                        <h2>Temple Construction</h2>
                    </div>
                </div>
            </div>
            <div className='col-md-4 mt-3'>
                <div className="image-container" data-aos="fade-down-right" data-aos-duration="1000">
                    <img src="/Assets/residentail1.jpg" alt="" style={{ height: "300px", width: "100%" }} />
                    <div className="image-overlay">
                        <h2>Residential Buildings</h2>
                    </div>
                </div>
            </div>
            <div className='col-md-4 mt-3'>
                <div className="image-container" data-aos="fade-down-left" data-aos-duration="1000">
                    <img src="/Assets/steal1.jpg" alt="" style={{ height: "300px", width: "100%" }} />
                    <div className="image-overlay">
                        <h2>Steel Project</h2>
                    </div>
                </div>
            </div>
            <div className='col-md-4 mt-3'>
                <div className="image-container" data-aos="fade-up"
     data-aos-duration="3000">
                    <img src="/Assets/factory.jpg" alt="" style={{ height: "300px", width: "100%" }} />
                    <div className="image-overlay">
                        <h2>Factory & Warehouse Buildings</h2>
                    </div>
                </div>
            </div>
            <div className='col-md-4 mt-3'>
                <div className="image-container" data-aos="fade-up"
     data-aos-duration="3000">
                    <img src="/Assets/ghar.jpg" alt="" style={{ height: "300px", width: "100%" }} />
                    <div className="image-overlay">
                        <h2>Homestay</h2>
                    </div>
                </div>
            </div>
            <div className='col-md-4 mt-3'>
                <div className="image-container" data-aos="fade-up"
     data-aos-duration="3000">
                    <img src="/Assets/factory1.jpg" alt="" style={{ height: "300px", width: "100%" }} />
                    <div className="image-overlay">
                        <h2>Commercial Complexes</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className='moreproject'>
                  <button onClick={formHandle}>More Projects</button>
        </div>
          </Container>
     </section>
     {/* <section id='ourproject'>
          <div className="container">
          <div id={style.works}>
              <div className={style.project}>
                 
                 <div  className={style.project2}>
                 <div onClick={()=>{
                  navigate("/ourproject")
                 }} className={style.project21} data-aos="fade-left" data-aos-duration="1000"></div>
                 <div onClick={()=>{
                  navigate("/ourproject")
                 }} className={style.project22} data-aos="zoom-out" data-aos-duration="1000"></div>
                 <div onClick={()=>{
                  navigate("/ourproject")
                 }} className={style.project23} data-aos="flip-left" data-aos-duration="1000"></div>
                 </div>
                  <div className={style.project3}>
                  <div onClick={()=>{
                  navigate("/ourproject")
                 }} className={style.project31} data-aos="flip-left" data-aos-easing="ease-out-cubic"  data-aos-duration="2000"></div>
                  <div onClick={()=>{
                  navigate("/ourproject")
                 }} className={style.project32} data-aos="fade-left" data-aos-duration="1000"></div>
                  
           </div>
          </div>
     </section> */}
     <section id='formoredetails'>
     <Container className='formore'>
            <h2>For more details: </h2>
            <button onClick={formoredetails}>Contact Us</button>
     </Container>
     </section>
    </div>
  )
}

export default Home
