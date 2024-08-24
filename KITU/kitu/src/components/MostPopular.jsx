import React from 'react'
import "../styles/Mostpopular.css"
const MostPopular = () => {
  return (
    <div>
        <div className="row">
       <div className='popularnews'><h3>Most Popular News</h3></div>
          <div className="col-md-4 ">
             
                <div class="card-container">
                  <div class="card">
                    <img src="/Assets/image1.jpg" alt="Image 1" class="card-image"
                    style={{height:"275px"}} />
                    <div class="card-content">
                     <a href="/detailsnews"> <h5>The 3rd General Conference of Karnataka State IT/ITeS Employees Union concluded with a determination to develop stronger working class movement in the IT/ITeS (& BPM) industry</h5></a>
                      <p>The 3rd General Conference of Karnataka State IT/ITeS Employees Union (KITU) was held on 17th and 18th December 2022 in Bangalore. The conference discussed the ...</p>
                    </div>
                  </div>
                </div>
              
          </div>
          <div className="col-md-4 ">
             
          <div class="card-container">
                  <div class="card">
                    <img src="/Assets/image2.jpg" alt="Image 1" class="card-image" />
                    <div class="card-content">
                     <a href="/detailsnews"> <h5>Karnataka State IT/ITeS Employees Union (KITU) Headquarters is inaugurated in Madiwala, Bangalore</h5></a>
                      <p>Karnataka State IT/ITeS Employees Union (KITU) Headquarters is inaugurated in Madiwala, Bangalore on 4th December 2022. Comrade Meenakshi Sundaram, CITU Karnataka State General Secretary inaugurated ...</p>
                    </div>
                  </div>
                </div>
              
          </div>
          <div className="col-md-4">
            <div>
              <div className="row justify-content-center">
                <div className="col-md-11">
              <h3 className='latestnewsxxx'>News Update</h3>
                  <div className='update'>
                    <img src="/Assets/update1.jpg" alt="" />
                    <p>KITU against mass retrenchments in Byju’s</p>
                  </div>
                  <div className='update'>
                    <img src="/Assets/update2.jpg" alt="" />
                    <p>Stop illegal mass retrenchments in Virtusa : KITU</p>
                  </div>
                  <div className='update'>
                    <img src="/Assets/update3.jpg" alt="" />
                    <p>KITU against Altisource on the issue of mass retrenchments</p>
                  </div>
                </div>
              </div>


            </div>
            <div>
             <div className="row justify-content-center">
              <div className="col-md-11">
              <h3 className='latestnewsxxx'>News Headlines</h3>
              <div className='newsheadline'>
              <a href=""><div className='icon-content'>
              <i className="fas fa-newspaper"></i>
              <p>Bengaluru employee union alleges Byju's forcing its employees to resign</p></div></a>
             
              <a href=""><div className='icon-content'>
              <i className="fas fa-newspaper"></i>
              <p>Byju's laying off workers in Bengaluru HQ, says K'taka IT workers' union</p></div></a>
            
              <a href=""><div className='icon-content'>
              <i className="fas fa-newspaper"></i>
              <p> Byju’s forcing employees to resign in Bengaluru office, says Karnataka IT union</p></div></a>
              </div>
              </div>
             </div>
            </div>
          </div>
        </div>
     
    </div>
  )
}

export default MostPopular
