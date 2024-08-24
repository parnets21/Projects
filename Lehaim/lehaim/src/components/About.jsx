import React, { useState } from 'react'
import "../styles/about.css"
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { FaGreaterThan } from "react-icons/fa";
import { PiGreaterThan, PiGreaterThanBold, PiGreaterThanFill } from "react-icons/pi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PiLineVerticalThin } from "react-icons/pi";

const About = () => {

  let [acc1, setacc1] = useState(true);
  let [acc2, setacc2] = useState(false);
  let [acc3, setacc3] = useState(false);
  let [acc4, setacc4] = useState(false);
  let [acc5, setacc5] = useState(false);
    



  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <div>
      <section id='about'>
        {/* <img src="/Assets/about.jpg" alt="" /> */}
        <div className="container ">
          <div className='breadcrumbt'>
            <div> <h1>About Us</h1></div>
            <div>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>About</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </section>
      <section id='about1'>
        <div className="container">
          <div>
            <div className="row">
              <div className="col-md-3 ">
                <div className='buttongroup' >

                  <div className='wholebutton'><button
                    onClick={() => {
                      setacc1(true); setacc2(false); setacc3(false);
                      setacc4(false); setacc5(false);
                    }}> <PiLineVerticalThin className='verticalbar'/>
                     <span className='buttname'>Who We Are</span><span className='greaterthan'><PiGreaterThanBold /></span></button>
                     <hr/></div>

                  <div > <button onClick={() => {
                    setacc1(false); setacc2(true); setacc3(false);
                    setacc4(false); setacc5(false);
                  }}><PiLineVerticalThin className='verticalbar'/>
                   <span className='buttname'>Our Mission </span><span className='greaterthan'><PiGreaterThanBold /></span></button>
                  <hr /></div>

                  <div><button onClick={() => {
                    setacc1(false); setacc2(false); setacc3(true);
                    setacc4(false); setacc5(false);
                  }}> <PiLineVerticalThin className='verticalbar'/>
                   <span className='buttname'>Experience</span><span className='greaterthan'><PiGreaterThanBold /></span></button>
                  <hr /></div>

                  <div>  <button onClick={() => {
                    setacc1(false); setacc2(false); setacc3(false);
                    setacc4(true); setacc5(false);
                  }}><PiLineVerticalThin className='verticalbar'/>
                   <span className='buttname'>Awards</span> <span className='greaterthan'><PiGreaterThanBold /></span></button>
                  <hr /></div>

                  <div><button onClick={() => {
                    setacc1(false); setacc2(false); setacc3(false);
                    setacc4(false); setacc5(true);
                  }}><PiLineVerticalThin className='verticalbar'/>
                   <span className='buttname'>Succes Story</span><span className='greaterthan'><PiGreaterThanBold /></span></button>
                  <hr /></div>
                </div>

                <div className='ec mt-5'>
                  <div className='row border'>
                    <div className='emergency'>
                      <div className="col-md-3 ">
                        <img src="/Assets/emgimg.png" alt="" className='emgimg' /></div>
                      <div className="col-md-9">
                        <div className='emgcontent'>
                          <p><b>Emergency <br /> Case</b></p>
                          <p>2-800-700-6200</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                 <div className='limitedoffer mt-5 '>
                  <img src="/Assets/limitedoffer.jpg" alt="" />
                  <button>SEE DETAILS  <PiGreaterThanBold className='seedetailsicon' /></button>
                  
                 </div>
              </div>

              {
                acc1 ? (<><div className="col-md-9 "  >
                  <div><h1 className='contentheading'>Let’s Know Short Story About Medilink Centeral Hospital.</h1></div>
                  <div className='contentparagraph'><p>Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut perspiciatis undeuisque. Maecenasbibendum non mattis fusceut perspiciatis undeuisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipiscing. Aliquam class bibendum mattis fusceut persecenas. Quisque. Maecenas. iquam class bibendum non mattis fusceut perspiciatis undeuisque. Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut perspiciatise.</p></div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className='contentimg'> <img src="/Assets/about1.jpg" alt="" /></div>
                    </div>
                    <div className="col-md-6">
                      <div className='contentimg'>  <img src="/Assets/about2.jpg" alt="" /></div>
                    </div>
                  </div>
                  <div  className='contentparagraph'><p>Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut perspiciatis undeuisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipiscing. Aliquam class bibendum mattis fusceut persecenas.iquam class bibendum non mattis fusceut perspiciatis undeuisque. Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceutfusceut perspiciatise.</p></div>
                  <div>
                    <div className="row">
                      <div className="col-md-6 patients">
                        <p><FaGreaterThan className='golu'/><b>Keep Patients First</b></p>
                        <p><FaGreaterThan className='golu'/><b>       Keep Everyone Safe</b></p>
                        <p><FaGreaterThan className='golu'/><b>    Work Together</b></p>
                      </div>
                      <div className="col-md-6 patients">
                        <p><FaGreaterThan className='golu'/><b>   Pursue Excellence</b></p>
                        <p><FaGreaterThan className='golu'/><b>   Manage Your Resources</b></p>
                        <p><FaGreaterThan className='golu'/><b>    Keep Learning</b></p>
                      </div>
                    </div>
                    <div  className='contentparagraph'><p>Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut perspiciatis undeuisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipiscing. Aliquam class bibendum mattis fusceut persecenas. Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut perspiciatis undeuisque. Quisque. Maecenas. Eros mus. Hy perspiciatise bibendum non mattis .</p></div>
                  </div>
                </div></>) : (<>{
                  acc2 ? (<><div className="col-md-9 "  >
                    <div><h1 className='contentheading'>Let’s Know Short Story About Our Mission.</h1></div>
                    <div className='contentparagraph'><p>Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut perspiciatis undeuisque. Maecenasbibendum non mattis fusceut perspiciatis undeuisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipiscing. Aliquam class bibendum mattis fusceut persecenas. Quisque. Maecenas. iquam class bibendum non mattis fusceut perspiciatis undeuisque. Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut perspiciatise.</p></div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className='contentimg'> <img src="/Assets/about1.jpg" alt="" /></div>
                      </div>
                      <div className="col-md-6">
                        <div className='contentimg'>  <img src="/Assets/about2.jpg" alt="" /></div>
                      </div>
                    </div>
                    <div  className='contentparagraph'><p>Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut perspiciatis undeuisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipiscing. Aliquam class bibendum mattis fusceut persecenas.iquam class bibendum non mattis fusceut perspiciatis undeuisque. Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceutfusceut perspiciatise.</p></div>
                    <div>
                      <div className="row">
                        <div className="col-md-6 patients">
                          <p><FaGreaterThan className='golu'/><b>Keep Patients First</b></p>
                          <p><FaGreaterThan className='golu'/><b>       Keep Everyone Safe</b></p>
                          <p><FaGreaterThan className='golu'/><b>    Work Together</b></p>
                        </div>
                        <div className="col-md-6 patients">
                          <p><FaGreaterThan className='golu'/><b>   Pursue Excellence</b></p>
                          <p><FaGreaterThan className='golu'/><b>   Manage Your Resources</b></p>
                          <p><FaGreaterThan className='golu'/><b>    Keep Learning</b></p>
                        </div>
                      </div>
                      <div  className='contentparagraph'><p>Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut perspiciatis undeuisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipiscing. Aliquam class bibendum mattis fusceut persecenas. Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut perspiciatis undeuisque. Quisque. Maecenas. Eros mus. Hy perspiciatise bibendum non mattis .</p></div>
                    </div>
                  </div></>) : (<>{
                    acc3 ? (<><div className="col-md-9 "  >
                      <div><h1 className='contentheading'>Let’s Know Short Story About Experience.</h1></div>
                      <div className='contentparagraph'><p>Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut perspiciatis undeuisque. Maecenasbibendum non mattis fusceut perspiciatis undeuisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipiscing. Aliquam class bibendum mattis fusceut persecenas. Quisque. Maecenas. iquam class bibendum non mattis fusceut perspiciatis undeuisque. Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut perspiciatise.</p></div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className='contentimg'> <img src="/Assets/about1.jpg" alt="" /></div>
                        </div>
                        <div className="col-md-6">
                          <div className='contentimg'>  <img src="/Assets/about2.jpg" alt="" /></div>
                        </div>
                      </div>
                      <div  className='contentparagraph'><p>Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut perspiciatis undeuisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipiscing. Aliquam class bibendum mattis fusceut persecenas.iquam class bibendum non mattis fusceut perspiciatis undeuisque. Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceutfusceut perspiciatise.</p></div>
                      <div>
                        <div className="row">
                          <div className="col-md-6 patients">
                            <p><FaGreaterThan className='golu'/><b>Keep Patients First</b></p>
                            <p><FaGreaterThan className='golu'/><b>       Keep Everyone Safe</b></p>
                            <p><FaGreaterThan className='golu'/><b>    Work Together</b></p>
                          </div>
                          <div className="col-md-6 patients">
                            <p><FaGreaterThan className='golu'/><b>   Pursue Excellence</b></p>
                            <p><FaGreaterThan className='golu'/><b>   Manage Your Resources</b></p>
                            <p><FaGreaterThan className='golu'/><b>    Keep Learning</b></p>
                          </div>
                        </div>
                        <div  className='contentparagraph'><p>Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut perspiciatis undeuisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipiscing. Aliquam class bibendum mattis fusceut persecenas. Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut perspiciatis undeuisque. Quisque. Maecenas. Eros mus. Hy perspiciatise bibendum non mattis .</p></div>
                      </div>
                    </div></>) : (<>{
                      acc4 ? (<><div className="col-md-9 "  >
                        <div><h1 className='contentheading'>Let’s Know Short Story About Awards</h1></div>
                        <div className='contentparagraph'><p>Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut perspiciatis undeuisque. Maecenasbibendum non mattis fusceut perspiciatis undeuisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipiscing. Aliquam class bibendum mattis fusceut persecenas. Quisque. Maecenas. iquam class bibendum non mattis fusceut perspiciatis undeuisque. Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut perspiciatise.</p></div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className='contentimg'> <img src="/Assets/about1.jpg" alt="" /></div>
                          </div>
                          <div className="col-md-6">
                            <div className='contentimg'>  <img src="/Assets/about2.jpg" alt="" /></div>
                          </div>
                        </div>
                        <div  className='contentparagraph'><p>Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut perspiciatis undeuisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipiscing. Aliquam class bibendum mattis fusceut persecenas.iquam class bibendum non mattis fusceut perspiciatis undeuisque. Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceutfusceut perspiciatise.</p></div>
                        <div>
                          <div className="row">
                            <div className="col-md-6 patients">
                              <p><FaGreaterThan className='golu'/><b>Keep Patients First</b></p>
                              <p><FaGreaterThan className='golu'/><b>       Keep Everyone Safe</b></p>
                              <p><FaGreaterThan className='golu'/><b>    Work Together</b></p>
                            </div>
                            <div className="col-md-6 patients">
                              <p><FaGreaterThan className='golu'/><b>   Pursue Excellence</b></p>
                              <p><FaGreaterThan className='golu'/><b>   Manage Your Resources</b></p>
                              <p><FaGreaterThan className='golu'/><b>    Keep Learning</b></p>
                            </div>
                          </div>
                          <div  className='contentparagraph'><p>Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut perspiciatis undeuisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipiscing. Aliquam class bibendum mattis fusceut persecenas. Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut perspiciatis undeuisque. Quisque. Maecenas. Eros mus. Hy perspiciatise bibendum non mattis .</p></div>
                        </div>
                      </div></>) : (<>{
                        acc5 ? (<><div className="col-md-9 "  >
                          <div><h1 className='contentheading'>Let’s Know Short Success story</h1></div>
                          <div className='contentparagraph'><p>Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut perspiciatis undeuisque. Maecenasbibendum non mattis fusceut perspiciatis undeuisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipiscing. Aliquam class bibendum mattis fusceut persecenas. Quisque. Maecenas. iquam class bibendum non mattis fusceut perspiciatis undeuisque. Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut perspiciatise.</p></div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className='contentimg'> <img src="/Assets/about1.jpg" alt="" /></div>
                            </div>
                            <div className="col-md-6">
                              <div className='contentimg'>  <img src="/Assets/about2.jpg" alt="" /></div>
                            </div>
                          </div>
                          <div  className='contentparagraph'><p>Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut perspiciatis undeuisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipiscing. Aliquam class bibendum mattis fusceut persecenas.iquam class bibendum non mattis fusceut perspiciatis undeuisque. Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceutfusceut perspiciatise.</p></div>
                          <div>
                            <div className="row">
                              <div className="col-md-6 patients">
                                <p><FaGreaterThan className='golu'/><b>Keep Patients First</b></p>
                                <p><FaGreaterThan className='golu'/><b>       Keep Everyone Safe</b></p>
                                <p><FaGreaterThan className='golu'/><b>    Work Together</b></p>
                              </div>
                              <div className="col-md-6 patients">
                                <p><FaGreaterThan className='golu'/><b>   Pursue Excellence</b></p>
                                <p><FaGreaterThan className='golu'/><b>   Manage Your Resources</b></p>
                                <p><FaGreaterThan className='golu'/><b>    Keep Learning</b></p>
                              </div>
                            </div>
                            <div  className='contentparagraph'><p>Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut perspiciatis undeuisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipiscing. Aliquam class bibendum mattis fusceut persecenas. Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut perspiciatis undeuisque. Quisque. Maecenas. Eros mus. Hy perspiciatise bibendum non mattis .</p></div>
                          </div>
                        </div></>) : (<></>)
                      }</>)
                    }</>)
                  }</>)
                }</>)
              }

            </div>
          </div>
        </div>
      </section>

      <section id='about2'>
        <div className="container">
          <div className="specialist"><h1>Specialist Doctors</h1></div>
          <div className="exp"><p>Experienced Doctor</p></div>
          <div className="allcard">

          <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={2000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px">
  <div> <Card style={{ width: '20rem' }}>
                  <Image src="/Assets/dr1.png" roundedCircle />
                  <Card.Body>
                    <Card.Title> <a className='drname' href="">Dr. Zinia Zara</a> </Card.Title>
                    <p className='diseasename' >Gynaecology</p>
                    <Card.Text>
                      <ul className='routine'>
                        <li>Mon - Tues
                          <span>08.00 :17.00</span>
                        </li>
                        <li>Fri - Sat
                          <span>09.00 :12.00</span>
                        </li>
                        <li>Sun - Mon
                          <span>08.00 :17.00</span>
                        </li>
                      </ul>
                    </Card.Text>
                    <button className='butt'> MAKE AN APPOINTMENT</button>
                  </Card.Body>
                </Card></div>
  <div>  <Card style={{ width: '20rem' }}>
                  <Image src="/Assets/dr2.png" roundedCircle />
                  <Card.Body>
                    <Card.Title><a className='drname' href="">Dr. Rihana Roy</a></Card.Title>
                    <p className='diseasename' >Lense Expert</p>
                    <Card.Text>
                      <ul className='routine'>
                        <li>Mon - Tues
                          <span>08.00 :17.00</span>
                        </li>
                        <li>Fri - Sat
                          <span>09.00 :12.00</span>
                        </li>
                        <li>Sun - Mon
                          <span>08.00 :17.00</span>
                        </li>
                      </ul>
                    </Card.Text>
                    <button className='butt'> MAKE AN APPOINTMENT</button>
                  </Card.Body>
                  </Card>
                  </div>
  <div><Card style={{ width: '20rem' }}>
                  <Image src="/Assets/dr3.png" roundedCircle />
                  <Card.Body>
                    <Card.Title><a className='drname' href="">Dr. Zinia Zara</a></Card.Title>
                    <p className='diseasename'>Orthopaedics</p>
                    <Card.Text>
                      <ul className='routine'>
                        <li>Mon - Tues
                          <span>08.00 :17.00</span>
                        </li>
                        <li>Fri - Sat
                          <span>09.00 :12.00</span>
                        </li>
                        <li>Sun - Mon
                          <span>08.00 :17.00</span>
                        </li>
                      </ul>
                    </Card.Text>
                    <button className='butt'> MAKE AN APPOINTMENT</button>
                  </Card.Body>
                </Card></div>
  <div><Card style={{ width: '20rem' }}>
                  <Image src="/Assets/dr4.png" roundedCircle />
                  <Card.Body>
                    <Card.Title><a className='drname' href="">Dr. Steven Roy</a></Card.Title>
                    <p className='diseasename'>Cardiology</p>
                    <Card.Text>
                      <ul className='routine'>
                        <li>Mon - Tues
                          <span>08.00 :17.00</span>
                        </li>
                        <li>Fri - Sat
                          <span>09.00 :12.00</span>
                        </li>
                        <li>Sun - Mon
                          <span>08.00 :17.00</span>
                        </li>
                      </ul>
                    </Card.Text>

                    <button className='butt'> MAKE AN APPOINTMENT</button>
                  </Card.Body>
                </Card></div>
</Carousel>


            {/* <div className="row">
              <div className="col-md-4">
                <Card style={{ width: '20rem' }}>
                  <Image src="/Assets/dr1.png" roundedCircle />
                  <Card.Body>
                    <Card.Title> <a className='drname' href="">Dr. Zinia Zara</a> </Card.Title>
                    <p className='diseasename' >Gynaecology</p>
                    <Card.Text>
                      <ul className='routine'>
                        <li>Mon - Tues
                          <span>08.00 :17.00</span>
                        </li>
                        <li>Fri - Sat
                          <span>09.00 :12.00</span>
                        </li>
                        <li>Sun - Mon
                          <span>08.00 :17.00</span>
                        </li>
                      </ul>
                    </Card.Text>
                    <button className='butt'> MAKE AN APPOINTMENT</button>
                  </Card.Body>
                </Card>
              </div>

              <div className="col-md-4">
                <Card style={{ width: '20rem' }}>
                  <Image src="/Assets/dr2.png" roundedCircle />
                  <Card.Body>
                    <Card.Title><a className='drname' href="">Dr. Rihana Roy</a></Card.Title>
                    <p className='diseasename' >Lense Expert</p>
                    <Card.Text>
                      <ul className='routine'>
                        <li>Mon - Tues
                          <span>08.00 :17.00</span>
                        </li>
                        <li>Fri - Sat
                          <span>09.00 :12.00</span>
                        </li>
                        <li>Sun - Mon
                          <span>08.00 :17.00</span>
                        </li>
                      </ul>
                    </Card.Text>
                    <button className='butt'> MAKE AN APPOINTMENT</button>
                  </Card.Body>
                </Card>
              </div>

              <div className="col-md-4">
                <Card style={{ width: '20rem' }}>
                  <Image src="/Assets/dr3.png" roundedCircle />
                  <Card.Body>
                    <Card.Title><a className='drname' href="">Dr. Zinia Zara</a></Card.Title>
                    <p className='diseasename'>Orthopaedics</p>
                    <Card.Text>
                      <ul className='routine'>
                        <li>Mon - Tues
                          <span>08.00 :17.00</span>
                        </li>
                        <li>Fri - Sat
                          <span>09.00 :12.00</span>
                        </li>
                        <li>Sun - Mon
                          <span>08.00 :17.00</span>
                        </li>
                      </ul>
                    </Card.Text>
                    <button className='butt'> MAKE AN APPOINTMENT</button>
                  </Card.Body>
                </Card>
              </div>

              
              <div className="col-md-4">
                <Card style={{ width: '20rem' }}>
                  <Image src="/Assets/dr3.png" roundedCircle />
                  <Card.Body>
                    <Card.Title><a className='drname' href="">Dr. Zinia Zara</a></Card.Title>
                    <p className='diseasename'>Orthopaedics</p>
                    <Card.Text>
                      <ul className='routine'>
                        <li>Mon - Tues
                          <span>08.00 :17.00</span>
                        </li>
                        <li>Fri - Sat
                          <span>09.00 :12.00</span>
                        </li>
                        <li>Sun - Mon
                          <span>08.00 :17.00</span>
                        </li>
                      </ul>
                    </Card.Text>

                    <button className='butt'> MAKE AN APPOINTMENT</button>
                  </Card.Body>
                </Card>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
