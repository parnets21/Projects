import React from 'react'
import "../styles/gallery.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
  }
const Galary = () => {
  return (
    <div id='galary'>
     <div className="container ">
            {/* <h1 style={{textAlign:"center",color:"blue"}}>Gallery</h1> */}

        <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={2000}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div><img src="/Assets/tanker1.jpg" alt="" className='gallery'/></div>
  <div><img src="/Assets/tanker4.jpg" alt="" className='gallery'/></div>
  <div><img src="/Assets/tanker3.jpg" alt="" className='gallery'/></div>
  <div><img src="/Assets/tanker2.jpg" alt="" className='gallery'/></div>
</Carousel>
        
     </div>
    </div>
  )
}

export default Galary
