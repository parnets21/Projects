import React, { useState } from 'react'
import style from "../styles/ourproject.module.css"
import { Container } from 'react-bootstrap';
const OurProject = () => {


  const [acc,setacc]= useState(true);
  const [acc1,setacc1]= useState(false);
  const [acc2,setacc2]= useState(false);
  const [acc3,setacc3]= useState(false);
  const [acc4,setacc4]= useState(false);
  const [acc5,setacc5]= useState(false);

  return (
    <div id={style.About}>
         <section id={style.about}>
    <div className={style.heading}>
    <h1>Our Project</h1>
    {/* <h3>Hoysala -Project </h3> */}
    </div>
    <div className={style.call}>
           <div className={style.contact}>
                  
              <div>
                <p>CALL US TODAY</p>
                <h3>+919341285260</h3>
              </div>
           </div>
               
       </div>
       
     </section >
       <section id='allproject'>
      <Container>
      <div className={style.container}>
      <div className={style.column}>
        <div className={style.buttonGroup} >
          <button className={style.button} 
          onClick={()=>{
            setacc(true);
            setacc1(false);setacc2(false);setacc3(false)
          }}
          >Temple construction</button>
          <button className={style.button}
           onClick={()=>{
             setacc(false);setacc4(false); setacc5(false)
             setacc1(false);setacc2(true);setacc3(false)
            }}
          >Residential Buildings</button>
          <button className={style.button}  onClick={()=>{
            setacc(false);setacc4(false); setacc5(false)
            setacc1(false);setacc2(false);setacc3(true)
          }}>Commercial </button>
          <button className={style.button}
           onClick={()=>{
            setacc(false);setacc4(false); setacc5(false)
            setacc1(true);setacc2(false);setacc3(false)
          }}
          >Homestay</button>
          <button className={style.button} 
          onClick={()=>{
            setacc(false); setacc1(false);setacc2(false);
            setacc3(false); setacc4(true); setacc5(false)
          }}>Steel Framed Structures</button>
          <button className={style.button}
           onClick={()=>{
            setacc(false); setacc1(false);setacc2(false);
            setacc3(false); setacc4(false); setacc5(true)
          }}>Factory &  Warehouses</button>
        </div>
      </div>
      {
        acc ? (<>
          <div className={style.column}>
            <h3>Temple Construction</h3>
        <p>reputation for delivering exquisitely crafted temples that reflect the rich cultural heritage and architectural grandeur of India.</p>
      <p>1.Shree Lakshmi Venkateshwara Temple - Muddina Palya</p>
      <p>2.	Shree Anjaneya Temple - Rajaji Nagar 2nd Block</p>
      <p>3.	Vishwakarma Temple - RPC Layout</p>
      <p>4.	Tripura Sundari Devi Temple - Dharwad</p>
      <p>5. Sri chamundeswari Temple - Hessaragatta</p>
      </div>
      <div className={style.column}>
        <div className={style.imageGrid}  >
          <img src="/Assets/temple1.jfif" alt="temple" className={style.image} />
          <img src="/Assets/temple4.jpg" alt="Project 2" className={style.image} />
          <img src="/Assets/temple2.jpg" alt="Project 2" className={style.image} />
          {/* Add more images as needed */}
        </div>
      </div>
        </>):(<>{
          acc1 ?(<>
          <div className={style.column}>
          <h3>Homestay</h3>
          <p>Hoysala Construction ventures into creating exceptional homestay projects that blend comfort, aesthetics, and local culture. our expertise spans over three decades, ensuring memorable experiences for guests in serene and picturesque settings.</p>   
          <p>We understand that a homestay is more than just accommodation; it's about creating a welcoming environment that reflects the charm and essence of its location. Our approach to homestay projects focuses on:</p> 
          <p><b>•	Authentic Design:</b> Each homestay is thoughtfully designed to harmonize with its surroundings, incorporating local architectural elements and materials.</p>
          <p><b>•	Comfort and Convenience:</b> We prioritize modern amenities and thoughtful layouts to ensure guests enjoy a comfortable stay.</p>
          <p><b>•	Sustainability: </b>Our homestay projects embrace sustainable practices to minimize environmental impact and promote eco-friendly tourism.</p>
           </div>
      <div className={style.column}>
        <div className={style.imageGrid}>
          <img src="/Assets/homestay1.jpg" alt="homestay" className={style.image} />
          <img src="/Assets/ghar.jpg" alt="Project 2" className={style.image} />
          <img src="/Assets/homestay.avif" alt="Project 2" className={style.image} />
          {/* Add more images as needed */}
        </div>
      </div>
          </>):(<>
          {
            acc2 ? (<>
 <div className={style.column}>
 <h3>Residential</h3>
        <p>Hoysala Construction specializes in crafting exceptional residential buildings that combine comfort, aesthetics, and functionality. we bring over three decades of expertise to every residential project we undertake.</p>
        <p>We understand that residential spaces are more than just buildings; they are homes where lives unfold and memories are made. Our approach to residential construction focuses on</p>
                <p><b>•	Customized Design: </b>We work closely with homeowners to understand their lifestyle, preferences, and aspirations, ensuring that each home is uniquely tailored to their needs.</p>
                <p><b>•	Quality Craftsmanship:</b> From foundation to finishing touches, we prioritize craftsmanship and attention to detail to create homes of enduring beauty and structural integrity.</p>
                <p><b>•	Innovation and Sustainability:</b> We incorporate sustainable building practices and innovative technologies to enhance energy efficiency and minimize environmental impact.</p>
      </div>
      <div className={style.column}>
        <div className={style.imageGrid} >
          <img src="/Assets/residentail1.jpg"  height='250px' alt="residential" className={style.image} />
          <img src="/Assets/residential3.jpg" height='250px' alt="Project 2" className={style.image} />
          {/* <img src="/Assets/residential4.jpg" height='250px' alt="Project 2" className={style.image} /> */}
          {/* Add more images as needed */}
        </div>
      </div>
            </>) :(<>{
              acc3 ? (<>
             <div className={style.column}>
             <h3>Commercial Complexes</h3>
        <p>At Hoysala Construction, we excel in creating state-of-the-art commercial complexes that cater to the diverse needs of businesses. we have built a reputation for delivering commercial spaces that are functional, innovative, and visually appealing.</p>
        <p>With over three decades of experience, we understand the unique challenges and requirements of commercial construction. Our expertise includes:</p>
        {/* <h6>•	Innovative Design</h6> */}
        <p>We create modern and efficient designs that optimize space and functionality, catering to a variety of business needs</p>
        <p><b>Advanced Technology Integration</b></p>
        <p>Our projects incorporate the latest technologies to enhance the functionality and appeal of the commercial spaces.</p>
      <p><b>Our Commercial Projects</b></p>
      <p>1.	IDBI Bank Building - Rajkumar Road</p>
      <p>2.	Commercial Complex - Kogilu Road, Yelahanka</p>
      <p>3.DR C.N.R. Rao Hall of Science - Laksheshwar,Hubli</p>
      </div>
      <div className={style.column} >
        <div className={style.imageGrid} >
          <img src="/Assets/commercial1.jpg" alt="commercial" className={style.image} />
          <img src="/Assets/school.jpg" alt="Project 2" className={style.image} />
          <img src="/Assets/commercial3.jpg" alt="commercial" className={style.image} />
          {/* Add more images as needed */}
        </div>
      </div>
              </>):(<>{
                acc4 ? (<>
                 <div className={style.column}>
                 <h3>Steal Farmed Structure</h3>
                 <p>Hoysala Construction is at the forefront of constructing robust and innovative steel framed structures that meet the diverse needs of modern infrastructure. Our company combines decades of experience with advanced engineering techniques to deliver exceptional projects.</p>
        <p>We specialize in designing and constructing steel framed structures that offer superior strength, durability, and versatility. Our expertise includes:</p>
      </div>
      <div className={style.column}>
        <div className={style.imageGrid} >
          <img src="/Assets/steal1.jpg" alt="steal" className={style.image} />
          <img src="/Assets/steal2.jpg" alt="Project 2" className={style.image} />
          {/* Add more images as needed */}
        </div>
      </div>
                </>):(<>{
                  acc5 ?(<>
                   <div className={style.column}>
                       <h3>Factory & Warehouses</h3>
                 <p>Hoysala Construction specializes in designing and constructing robust factory buildings that meet the specific needs of industrial operations. We have been committed to delivering high-quality, functional, and efficient factory & Warehouse spaces .</p>
        <p>We bring extensive experience and technical expertise to every factory building project, ensuring optimal solutions for industrial clients. Our capabilities include</p>
      </div>
      <div className={style.column}>
        <div className={style.imageGrid} >
          <img src="/Assets/factory.jpg" alt="ftry" className={style.image} />
          <img src="/Assets/factory1.jpg" alt="Project 2" className={style.image} />
          {/* Add more images as needed */}
        </div>
      </div>
                  </>):(<></>)
                }</>)
              }</>)
            }</>)
          }
          </>)
        }</>)
      }
    
    </div>
      </Container>
       </section>
     </div>
    
  )
}

export default OurProject
