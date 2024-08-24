import React from 'react'
import '../styles/about.css'
import WorkProcess from './WorkProcess'
import { useNavigate } from 'react-router-dom'
const About = () => {
    let Navigate=useNavigate();
    return (
        <div>
            <section id='about1' data-aos="zoom-in"data-aos-duration="2000">
                           {/* <img src="/Assets/kmkimg12.jpg" alt="" style={{width:"100%",height:"400px"}} /> */}
              
            </section>


            <section id='about2'>
                        <div className='aboutus'> <h1  data-aos="zoom-in" data-aos-duration="2000">About Us</h1></div>
                <div className="container">
                    <div className='vision'>
                        <div className="row">
                            <div data-aos="zoom-in"data-aos-duration="2000" className="col-md-6">
                                <img src="/Assets/kmkimg5.jpg" alt="" className='wlcimg'  />
                            </div>
                            <div className="col-md-6">
                                <div className="aos-init aos-animate" data-aos="zoom-in"data-aos-duration="2000">
                            <div > <h1 style={{color:"green"}}>Welcome to KMK Industries</h1>
                                    <p>At KMK Industries, we specialize in comprehensive e-waste recycling management offering  environmentally responsible solutions for disposing of  electronic waste and metal scrap.  Our mission is to protect the planet  by reducing electronic  and metal waste through <br /> innovative recycling  techniques and sustainable practices.</p></div>
                                   <div><p>“” At KMK Industries, we are dedicated to providing reliable, responsible, and sustainable recycling solutions. Choose us for your e-waste and metal recycling needs, and join us in making a positive impact on the environment””</p></div>
                                   <div className='ourvm'><h5>Our Vision and Mission</h5></div>
                                    <div>
                                        <p><b>Our Vision :</b> At KMK Industries, our vision is to lead the way in sustainable e-waste and metal recycling, creating a cleaner, healthier planet for future generations. We aim to be a global leader in recycling management by continuously innovating and implementing best practices that reduce environmental impact and promote resource conservation.
                                        </p>
                                        
                                        <p><b>Our Mission :</b>Our mission at KMK Industries is to provide comprehensive and responsible recycling solutions that protect the environment and support our communities. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


           <section id='about3'>
            <div className="container">
                <div className='commited'>
                    <div className="row">
                        <div className='we'>
                            <h1 data-aos="zoom-in" data-aos-duration="2000">We are committed to</h1>
                        </div>
                    </div>
                    <div className="row mb-4 ">
                        <div className="col-md-4 p-2">
                            <div data-aos="zoom-in"data-aos-duration="2000" className='sustainability'>
                                <h5>1.	Sustainability:</h5>
                                <p>Implementing environmentally friendly recycling processes that minimize waste and conserve natural resources</p>
                                <p>Promoting sustainable practices in all aspects of our operations</p>
                            </div>
                        </div>
                        <div className="col-md-4 p-2">
                             <div data-aos="zoom-in"data-aos-duration="2000" className='sustainability'>
                             <h5>2.Innovation:</h5>
                             <p>Continuously improving our recycling methods through innovation and the adoption of cutting-edge technologies</p>
                            <p>Staying ahead of industry trends to provide the best possible solutions for our clients</p>
                            </div>
                        </div>
                        <div className="col-md-4 p-2">
                             <div data-aos="zoom-in"data-aos-duration="2000" className='sustainability'>
                               <h5>3.	Security</h5>
                                <p>Ensuring the secure destruction of data and sensitive information to protect our clients' privacy and comply with regulatory standards</p>
                                <p>Maintaining the highest standards of data security throughout our processes</p>
                            </div>
                        </div>
                        <div className="col-md-4 p-2">
                             <div data-aos="zoom-in"data-aos-duration="2000" className='sustainability'>
                                <h5>4.	Customer Focus</h5>
                                <p>Delivering exceptional service and customized solutions that meet the unique needs of each client</p>
                                <p>Building long-term relationships based on trust, transparency, and satisfaction</p>
                            </div>
                        </div>
                        <div  className="col-md-4 p-2">
                             <div data-aos="zoom-in"data-aos-duration="2000" className='sustainability'>
                               <h5>5.	Community Impact</h5>
                                <p>Contributing to the well-being of our communities through responsible recycling and environmental stewardship</p>
                                <p>Educating and raising awareness about the importance of e-waste and metal recycling</p>
                            </div>
                        </div>
                        <div className="col-md-4 p-2">
                             <div data-aos="zoom-in"data-aos-duration="2000" className='sustainability'>
                                <h5>6.	Compliance</h5>
                                <p>Adhering to all local, national, and international regulations related to e-waste and metal recycling</p>
                                <p>Ensuring that our operations are legally and ethically sound</p>
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
                            <div className="col-md-6">
                                <div data-aos="zoom-in"data-aos-duration="2000" className='environment'>
                                    <p>Recycling Wastage Save Environment!</p>
                                    <h1>Simple Steps Wastage <br />
                                        to Recycling Item <br />Processing</h1>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div data-aos="zoom-in"data-aos-duration="2000" className='environment1'>
                                    <p>Recycling is the process of converting waste materials into new materials and objects. To do this, recycling often requires both machinery and employees to correctly sort recyclable items based on the material they’re made of.</p>
                                    <p>This Waste Management video shows the step-by-step process of how materials are processed once they reach a facility.</p>
                                    {/* <div className='butt'>
                                        <button onClick={()=>{
                                            Navigate("/contact")
                                        }} className='butt1'>Get Started</button>
                                        <button className='butt2'>View Our Plans</button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='dabba'>
                        <div className="row">
                            <div className="col-md-3">

                                <div data-aos="zoom-in"data-aos-duration="2000" className='collection'>
                                    <div>
                                        <img  src="/Assets/wastagecoll.jpg"  className='wastagecoll' alt="" />
                                    </div>
                                    <div ><h5>Collection</h5></div>
                                    <div>  <p>We arrange for the collection of e-waste and metal scrap from your location.</p></div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div data-aos="zoom-in"data-aos-duration="2000" className='collection'>
                                    <div>
                                        <img src="/Assets/pickup.jpg" className='wastagecoll' alt="" />
                                    </div>
                                    <div><h5>Security</h5></div>
                                    <div>
                                        <p>Our logistics team ensures safe and secure transportation to our recycling facilities.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div>
                                    <div data-aos="zoom-in"data-aos-duration="2000" className='collection'>
                                        <div>
                                            <img src="/Assets/reduce.jpg" className='wastagecoll' alt="" />
                                        </div>
                                        <div><h5>Processing</h5></div>
                                        <div><p>Upon arrival at our facility, e-waste and metals are sorted based on material type and condition	</p></div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-3">
                                <div data-aos="zoom-in"data-aos-duration="2000" className='collection'>
                                    <div>
                                        <img src="/Assets/recycling.jpg" className='wastagecoll' alt="" />
                                    </div>
                                    <div><h5>Recycling</h5></div>
                                    <div><p>Non-reusable e-waste and metals are processed through environmentally friendly recycling methods.</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


{/* <WorkProcess/> */}
        </div>
    )
}

export default About
