import React from 'react'
import "../styles/Gallery.css"
const Gallery = () => {
  return (
    <div>
      <section>
       <div className='gallery'> <h1>Gallery</h1></div>
       <div className="container">
         <div className="row">
         <div className="col-md-4 p-3  ">
              <img src="/Assets/carouselimg1.jpeg" alt="" className='galleryimg'/>
          </div>

          <div className="col-md-4 p-3 ">
              <img src="/Assets/image2.jpg" alt="" className='galleryimg'/>
          </div>
          <div className="col-md-4 p-3">
              <img src="/Assets/image3.jpg" alt="" className='galleryimg'/>
          </div>
          <div className="col-md-4 p-3 ">
              <img src="/Assets/image4.jpg" alt="" className='galleryimg'/>
          </div>
          <div className="col-md-4 p-3 ">
              <img src="/Assets/image5.jpg" alt="" className='galleryimg'/>
          </div>
          <div className="col-md-4 p-3 ">
              <img src="/Assets/image6.jpg" alt="" className='galleryimg'/>
          </div>
          <div className="col-md-4 p-3 ">
              <img src="/Assets/image7.jpg" alt="" className='galleryimg'/>
          </div>
          <div className="col-md-4 p-3 ">
              <img src="/Assets/image8.jpg" alt="" className='galleryimg'/>
          </div>
          <div className="col-md-4 p-3  ">
              <img src="/Assets/image1.jpg" alt="" className='galleryimg'/>
          </div>
          <div className="col-md-4 p-3  ">
              <img src="/Assets/image10.jpg" alt="" className='galleryimg'/>
          </div>
          <div className="col-md-4 p-3  ">
              <img src="/Assets/update1.jpg" alt="" className='galleryimg'/>
          </div>
          <div className="col-md-4 p-3  ">
              <img src="/Assets/kitulogo.png" alt="" className='galleryimg'/>
          </div>
         
        
        </div>
       </div>
      </section>
    </div>
  )
}

export default Gallery
