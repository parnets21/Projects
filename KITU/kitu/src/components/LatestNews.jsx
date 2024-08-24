import React from 'react'
import "../styles/Latestnews.css"
import { Link } from 'react-router-dom'
const LatestNews = () => {
  return (
    <div>
      
        <div className='lastestnews-event'><h3>Latest News & Events</h3></div>
        <div className="row">
          <div className="col-md-5 p-5">
            <div className='img-container'>
              <img src="/Assets/image8.jpg"  className='image1'/>
              <div class="overlay1">
              <span class="plus-sign">
                      <Link to="/detailsnews"><h5>Big win for KITU : DLC ordered to reinstate the employees who were illegally terminated by the management of MPS Ltd</h5></Link>
                    <p>In a big victory for Karnataka State IT/ITeS Employees union (KITU), the Deputy Labour Commissioner, Bangalore ordered to reinstate the ...</p></span>
               
              </div>
            </div>
          </div>
          <div className="col-md-7 p-5  " style={{position:"relative",left:"-45px"}} >
            <div className="row">
              <div className="col-md-6 pb-4 ">
                <div class="image-container">
                  <img src="/Assets/image4.jpg" alt="" className='image' />
                  <div class="overlay1">
                    <span class="plus-sign">
                      <a href="/detailsnews"><h5>IT capital is getting ready for the 3rd General Conference of Karnataka State IT/ITeS Employees Union</h5></a>
                    <p>Bangalore: IT capital is getting ready for the 3rd General Conference of Karnataka State IT/ITeS Employees Union (KITU). Preparations are ...</p></span>
                  </div></div>
              </div>
              <div className="col-md-6  pb-4">
                <div class="image-container">
                  <img src="/Assets/image10.jpg" alt="" className='image' />
                  <div class="overlay1">
                  <span class="plus-sign">
                    <a href="/detailsnews"><h5>Intervention against the Exemption of IT Sector from Industrial Employment Standing Orders Act</h5></a>
                  <p>Government of Karnataka by notification no: LD 194 LET 2016 dated 25/05/2019 extended for further 5 years inapplicability of Industrial ...</p></span>
                  </div></div>
              </div>
              <div className="col-md-6  pb-4">
                <div class="image-container">
                  <img src="/Assets/image3.jpg" alt="" className='image' />
                  <div class="overlay1">
                  <span class="plus-sign">
                    <a href="/detailsnews"><h5>KITU formed four units in Madiwala</h5></a>
                  <p>Karnataka State IT/ITeS Employees Union (KITU) Madiwala Unit Conference held at KITU Headquarters, Maruthi Nagar (Bangalore). KITU Secretary Comrade Abhinrag ...</p></span>
                  </div></div>
              </div>
              <div className="col-md-6  pb-4 ">
                <div class="image-container">
                  <img src="/Assets/image5.jpg" alt="" className='image' />
                  <div class="overlay1">
                  <span class="plus-sign">
                  <a href="/detailsnews"><h5>KITU May Day Rally in Bangalore</h5></a>
                  <p>Karnataka State IT/ITeS Employees Union salutes the employees of IT/ITeS sector in Karnataka for their inspiring participation in the May ...</p>
                </span>
                  </div></div>
              </div>
           
            </div>
          </div>
        </div>
     
    </div>
  )
}

export default LatestNews
