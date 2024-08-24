import React, { useState } from 'react'
import style from "../styles/galary.css"
import { Container, Row, Col } from 'react-bootstrap';
const Galary = () => {
  let[sec,setSec]=useState(true)
  let [sec1,setSec1]=useState(false);
  let [sec2, setSec2]=useState(false);
  return (

    <div>
      <section id='galary' data-aos="zoom-out" data-aos-duration="2000">
          <div className='homegalary'>
          
            <h1 className='galaryname'>Gallery</h1>
          </div>
          <div className=' namegalary'>
          <a onClick={()=>{
            setSec(true); setSec1(false); setSec2(false);
          }}>All</a>
          <a onClick={()=>{
            setSec(false); setSec1(true);setSec2(false);
          }}>IT Assets & E-Waste
          </a>
          <a onClick={()=>{
           setSec(false); setSec1(false); setSec2(true);
          }}>  Metal Scrap</a>
          </div>
        </section>

      <Container>
        <div className='row mt-3 mb-3 ' >
        {
          sec ? (<> <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/imgkmk2.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
  
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/imgkmk1.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
  
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/imgkmk3.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
  
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/imgkmk4.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
  
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/imgkmk5.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
  
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg1.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
  
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg2.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
  
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg3.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
  
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg4.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
  
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg5.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
  
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg6.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
  
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg7.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
  
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg8.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
  
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg9.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
  
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg10.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
  
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg11.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
  
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg12.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
  
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg13.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
  
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg14.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
  
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg15.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
  
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg16.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
  
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg17.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
  
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg18.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
  
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg19.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
            
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg20.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg21.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg22.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg23.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg24.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg25.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg26.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg27.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg29.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg28.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg30.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg31.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg32.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg33.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg34.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg35.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg36.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/kmkimg37.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
  
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/imgkmk1.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/imgkmk6.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/imgkmk7.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/imgkmk8.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/imgkmk9.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/imgkmk10.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/imgkmk11.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/imgkmk12.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/imgkmk13.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/imgkmk14.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/imgkmk15.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/imgkmk16.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/imgkmk17.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/imgkmk18.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
          <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="2000">
            <img src="/Assets/imgkmk19.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
  </>):(<>{
            sec1 ? (<><div class=" gap-1 overcontent1   col-md-4">
              <div class="image-container" >
              <img src="/Assets/kmkimg15.jpg" alt="gallery1" class="imgcontroll "/>
              </div></div>
    
            <div class=" gap-1 overcontent1   col-md-4">
              <div class="image-container" >
              <img src="/Assets/kmkimg16.jpg" alt="gallery1" class="imgcontroll "/>
              </div></div>
    
            <div class=" gap-1 overcontent1   col-md-4">
              <div class="image-container" >
              <img src="/Assets/kmkimg17.jpg" alt="gallery1" class="imgcontroll "/>
              </div></div>
    
            <div class=" gap-1 overcontent1   col-md-4">
              <div class="image-container" >
              <img src="/Assets/kmkimg18.jpg" alt="gallery1" class="imgcontroll "/>
              </div></div>
    
            <div class=" gap-1 overcontent1   col-md-4">
              <div class="image-container" >
              <img src="/Assets/kmkimg19.jpg" alt="gallery1" class="imgcontroll "/>
              </div></div>
              
            <div class=" gap-1 overcontent1   col-md-4">
              <div class="image-container" >
              <img src="/Assets/kmkimg20.jpg" alt="gallery1" class="imgcontroll "/>
              </div></div>
            <div class=" gap-1 overcontent1   col-md-4">
              <div class="image-container" >
              <img src="/Assets/kmkimg21.jpg" alt="gallery1" class="imgcontroll "/>
              </div></div>
            <div class=" gap-1 overcontent1   col-md-4">
              <div class="image-container" >
              <img src="/Assets/kmkimg22.jpg" alt="gallery1" class="imgcontroll "/>
              </div></div>
            <div class=" gap-1 overcontent1   col-md-4">
              <div class="image-container" >
              <img src="/Assets/kmkimg23.jpg" alt="gallery1" class="imgcontroll "/>
              </div></div>
            <div class=" gap-1 overcontent1   col-md-4">
              <div class="image-container">
              <img src="/Assets/kmkimg24.jpg" alt="gallery1" class="imgcontroll "/>
              </div></div>
            <div class=" gap-1 overcontent1   col-md-4">
              <div class="image-container">
              <img src="/Assets/kmkimg25.jpg" alt="gallery1" class="imgcontroll "/>
              </div></div>
            <div class=" gap-1 overcontent1   col-md-4">
              <div class="image-container">
              <img src="/Assets/kmkimg26.jpg" alt="gallery1" class="imgcontroll "/>
              </div></div>
            <div class=" gap-1 overcontent1   col-md-4">
              <div class="image-container" >
              <img src="/Assets/kmkimg27.jpg" alt="gallery1" class="imgcontroll "/>
              </div></div>
            <div class=" gap-1 overcontent1   col-md-4">
              <div class="image-container" >
              <img src="/Assets/kmkimg29.jpg" alt="gallery1" class="imgcontroll "/>
              </div></div>
            <div class=" gap-1 overcontent1   col-md-4">
              <div class="image-container" >
              <img src="/Assets/kmkimg28.jpg" alt="gallery1" class="imgcontroll "/>
              </div></div>
            <div class=" gap-1 overcontent1   col-md-4">
              <div class="image-container" >
              <img src="/Assets/kmkimg30.jpg" alt="gallery1" class="imgcontroll "/>
              </div></div>
            <div class=" gap-1 overcontent1   col-md-4">
              <div class="image-container" >
              <img src="/Assets/kmkimg31.jpg" alt="gallery1" class="imgcontroll "/>
              </div></div>
            <div class=" gap-1 overcontent1   col-md-4">
              <div class="image-container"> 
              <img src="/Assets/kmkimg32.jpg" alt="gallery1" class="imgcontroll "/>
              </div></div>
            <div class=" gap-1 overcontent1   col-md-4">
              <div class="image-container">
              <img src="/Assets/kmkimg33.jpg" alt="gallery1" class="imgcontroll "/>
              </div></div>
            <div class=" gap-1 overcontent1   col-md-4">
              <div class="image-container" >
              <img src="/Assets/kmkimg34.jpg" alt="gallery1" class="imgcontroll "/>
              </div></div>
            <div class=" gap-1 overcontent1   col-md-4">
              <div class="image-container" >
              <img src="/Assets/kmkimg35.jpg" alt="gallery1" class="imgcontroll "/>
              </div></div>
            <div class=" gap-1 overcontent1   col-md-4">
              <div class="image-container" >
              <img src="/Assets/kmkimg36.jpg" alt="gallery1" class="imgcontroll "/>
              </div></div>
            <div class=" gap-1 overcontent1   col-md-4">
              <div class="image-container" >
              <img src="/Assets/kmkimg37.jpg" alt="gallery1" class="imgcontroll "/>
              </div></div></>):(<>{
              sec2 ?(<>
              <div class=" gap-1 overcontent1   col-md-4">
                <div class="image-container">
                <img src="/Assets/imgkmk6.jpg" alt="gallery1" class="imgcontroll "/>
                </div></div>
              <div class=" gap-1 overcontent1   col-md-4">
                <div class="image-container" >
                <img src="/Assets/imgkmk7.jpg" alt="gallery1" class="imgcontroll "/>
                </div></div>
              <div class=" gap-1 overcontent1   col-md-4">
                <div class="image-container">
                <img src="/Assets/imgkmk8.jpg" alt="gallery1" class="imgcontroll "/>
                </div></div>
              <div class=" gap-1 overcontent1   col-md-4">
                <div class="image-container" >
                <img src="/Assets/imgkmk9.jpg" alt="gallery1" class="imgcontroll "/>
                </div></div>
              <div class=" gap-1 overcontent1   col-md-4">
                <div class="image-container" >
                <img src="/Assets/imgkmk10.jpg" alt="gallery1" class="imgcontroll "/>
                </div></div>
              <div class=" gap-1 overcontent1   col-md-4">
                <div class="image-container" >
                <img src="/Assets/imgkmk11.jpg" alt="gallery1" class="imgcontroll "/>
                </div></div>
              <div class=" gap-1 overcontent1   col-md-4">
                <div class="image-container" >
                <img src="/Assets/imgkmk12.jpg" alt="gallery1" class="imgcontroll "/>
                </div></div>
              <div class=" gap-1 overcontent1   col-md-4">
                <div class="image-container" >
                <img src="/Assets/imgkmk13.jpg" alt="gallery1" class="imgcontroll "/>
                </div></div>
              <div class=" gap-1 overcontent1   col-md-4">
                <div class="image-container" >
                <img src="/Assets/imgkmk14.jpg" alt="gallery1" class="imgcontroll "/>
                </div></div>
              <div class=" gap-1 overcontent1   col-md-4">
                <div class="image-container" >
                <img src="/Assets/imgkmk15.jpg" alt="gallery1" class="imgcontroll "/>
                </div></div>
              <div class=" gap-1 overcontent1   col-md-4">
                <div class="image-container">
                <img src="/Assets/imgkmk16.jpg" alt="gallery1" class="imgcontroll "/>
                </div></div>
              <div class=" gap-1 overcontent1   col-md-4">
                <div class="image-container" >
                <img src="/Assets/imgkmk17.jpg" alt="gallery1" class="imgcontroll "/>
                </div></div>
              <div class=" gap-1 overcontent1   col-md-4">
                <div class="image-container" >
                <img src="/Assets/imgkmk18.jpg" alt="gallery1" class="imgcontroll "/>
                </div></div>
              <div class=" gap-1 overcontent1   col-md-4">
                <div class="image-container">
                <img src="/Assets/imgkmk19.jpg" alt="gallery1" class="imgcontroll "/>
                </div></div>
                <div class=" gap-1 overcontent1   col-md-4">
            <div class="image-container" >
            <img src="/Assets/kmkimg1.jpg" alt="gallery1" class="imgcontroll "/>
            </div></div>
                </>):(<></>)
            }</>)
          }</>)
          
        }
         

       
        
          {/* <div className='col-md-4 mt-2 mb-2  '  data-aos="flip-left" data-aos-easing="ease-out-cubic" >
            <img src="/Assets/imgkmk1.jpg" alt="" style={{ height: "300px", width:"100%" }} />
          </div>
          <div className='col-md-4 mt-1 mb-1  bprder' data-aos="zoom-out-right">
            <img src="/Assets/imgkmk3.jpg"  alt="" style={{ height: "300px", width:"100%" }} />
          </div>

          <div className='col-md-4 mt-1 mb-1  img2' data-aos="flip-right" data-aos-duration="1000">
            <img src="/Assets/imgkmk4.jpg" alt="" style={{ height: "300px", width:"100%" }} />
          </div>

          <div className='col-md-4  mt-1 mb-1 img3' data-aos="flip-left" >
            <img src="/Assets/imgkmk5.jpg" alt="" style={{ height: "300px", width:"100%"}} />
          </div>

          <div className='col-md-4 mt-1 mb-1  img1' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <img src="/Assets/kmkimg1.jpg" alt="" style={{ height: "300px", width:"100%" }} />
          </div>

          <div className='col-md-4 mt-1 mb-1  img2' data-aos="fade-up" data-aos-duration="3000">
            <img src="/Assets/kmkimg2.jpg" alt="" style={{ height: "300px", width:"100%" }} />
          </div>

          <div className='col-md-4 mt-1 mb-1  img3' data-aos="fade-up" data-aos-duration="3000">
            <img src="/Assets/kmkimg3.jpg" alt="" style={{ height: "300px", width:"100%" }} />
          </div>

          <div className='col-md-4 mt-3 mb-3  img1' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <img src="/Assets/kmkimg4.jpg" alt="" style={{ height: "300px", width:"100%" }} />
          </div>

          <div className='col-md-4 mt-3 mb-3  img1' data-aos="zoom-out-right">
            <img src="/Assets/kmkimg5.jpg" alt="" style={{ height: "300px ", width:"100%" }} />
          </div>
          
          <div className='col-md-4 mt-3 mb-3  img2' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <img src="/Assets/kmkimg6.jpg" alt="" style={{ height: "300px", width:"100%" }} />
          </div>

          <div className='col-md-4 mt-3 mb-3   img3' data-aos="zoom-out" >
            <img src="/Assets/kmkimg7.jpg" alt="" style={{ height: "300px", width:"100%"}} />
          </div>
          <div className='col-md-4 mt-3 mb-3   img3' data-aos="flip-left" >
            <img src="/Assets/kmkimg8.jpg" alt="" style={{ height: "300px", width:"100%"}} />
          </div>
          <div className='col-md-4 mt-3 mb-3   img3' data-aos="zoom-in" >
            <img src="/Assets/kmkimg9.jpg" alt="" style={{ height: "300px", width:"100%"}} />
          </div>
          <div className='col-md-4 mt-3 mb-3   img3' data-aos="zoom-in-up" >
            <img src="/Assets/kmkimg10.jpg" alt="" style={{ height: "300px", width:"100%"}} />
          </div>
          <div className='col-md-4 mt-3 mb-3   img3' data-aos="flip-left" >
            <img src="/Assets/kmkimg11.jpg" alt="" style={{ height: "300px", width:"100%"}} />
          </div>
          <div className='col-md-4 mt-3 mb-3   img3' data-aos="zoom-in" >
            <img src="/Assets/kmkimg12.jpg" alt="" style={{ height: "300px", width:"100%"}} />
          </div>
          <div className='col-md-4 mt-3 mb-3   img3' data-aos="flip-left" >
            <img src="/Assets/kmkimg13.jpg" alt="" style={{ height: "300px", width:"100%"}} />
          </div>
          <div className='col-md-4 mt-3 mb-3   img3' data-aos="zoom-in" >
            <img src="/Assets/kmkimg14.jpg" alt="" style={{ height: "300px", width:"100%"}} />
          </div>
          <div className='col-md-4 mt-3 mb-3   img3' data-aos="flip-left" >
            <img src="/Assets/kmkimg15.jpg" alt="" style={{ height: "300px", width:"100%"}} />
          </div>
          <div className='col-md-4 mt-3 mb-3   img3' data-aos="zoom-in" >
            <img src="/Assets/kmkimg16.jpg" alt="" style={{ height: "300px", width:"100%"}} />
          </div>
          <div className='col-md-4 mt-3 mb-3   img3' data-aos="flip-left" >
            <img src="/Assets/kmkimg17.jpg" alt="" style={{ height: "300px", width:"100%"}} />
          </div>
          <div className='col-md-4 mt-3 mb-3   img3' data-aos="zoom-in" >
            <img src="/Assets/kmkimg18.jpg" alt="" style={{ height: "300px", width:"100%"}} />
          </div>
          <div className='col-md-4 mt-3 mb-3   img3' data-aos="flip-left" >
            <img src="/Assets/kmkimg1.jpg" alt="" style={{ height: "300px", width:"100%"}} />
          </div> */}
        </div>
         </Container>

    </div>

  )
}

export default Galary
