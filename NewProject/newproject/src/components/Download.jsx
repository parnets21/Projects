import React from 'react'
import "../styles/download.css"
const Download = () => {
  return (
    
   <section className='download' id='download'>
     <div className='container '>
        <div className='app-download' >
            <div className="row">
                {/* <div className="col-md-6">Images</div>
                <div className="col-md-6">Download Our App</div> */}
            </div>
            <div className="row">
                <div className="col-md-6 " >
                 <div className='mobileimg'> 
                    <img src="/Assets/mobile.png" alt="" />
                    </div>
                  </div>                
                <div className="col-md-6">
                    <div className='mobilecontent'>
                      <div><h3>Download Our App</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, aliquam molestias. Ipsa, blanditiis obcaecati! At perspiciatis odit blanditiis sit, exercitationem sapiente aliquid unde impedit similique, eius reprehenderit. Laboriosam, ipsum in?</p></div>
                       <div className='google-scan'>
                       <div className='googleplay'>
                            <img src="/Assets/googleplay.png" alt="" />Google Play</div>
                        <div className='scan'>
                            {/* <p>Scan me</p> */}
                            <img src="/Assets/qrcode.webp" alt="" /></div>
                       </div>
                    </div>
                <div>
                   
                </div>
                    </div>                
            </div>
        </div>


    </div>
   </section>
  )
}

export default Download
