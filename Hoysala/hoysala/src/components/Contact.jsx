import React from 'react'
import style from "../styles/contact.module.css"
const Contact = () => {
  return (
     <div className={style.container}>
        <div className={style.image} data-aos="zoom-out" data-aos-duration="2000" >
             {/* <h1>CONTACT US</h1> */}
        </div>
         <section id={style.contact}>
        <div className={style.user}>
            <div className={style.userdata}>
                {/* <p>Appointment form</p> */}
                <h1>Request a quote</h1>
                <form action="">
                    <input type="text"  placeholder='Your Name(Required)'/>
                    <input id={style.input2} type="phone" placeholder='Email(required)' /><br />
                    <input type="email" placeholder='Phone No' />
                    <select name="Rooms" id="rooms">Rooms
                     <option value="Room">Choose Project</option>
                     <option value="Rooms">Temple</option>
                     <option value="Rooms">Residential</option>
                     <option value="Rooms">Homestay</option>
                     <option value="Rooms">Commercial</option>
                     <option value="Rooms">Factory</option>
                     
                </select><br />
                    <textarea type="address"  placeholder='Leave us message'/>
                </form>
            </div>
            <div className={style.location}>
                <div className={style.address}>
                    <h2 className={style.quick}>Our location</h2>
                    <div className={style.locationimg}>
                    <a href="https://www.google.com/maps/search/Hoysala+Construction+No.+82,+2nd+Block,+Dr.+Rajkumar+Road,+Rajaji+Nagar,+Bangalore+10./@12.9966468,77.5516496,17z/data=!3m1!4b1?entry=ttu">
                    <img src={"/Assets/location.png"} height="70px" width="70px" alt="" /></a>
                    </div>
                    <p className='addres'>Hoysala Construction No. 82, 2nd Block, Dr. Rajkumar Road, Rajaji Nagar, Bangalore 10.</p>
                </div>
                <div className={style.email}>
                    <h2 className={style.quick}>Quik contact</h2>
                    <li><i class="fa-solid fa-phone-volume"></i>
                  </li>  <p>+91-9341285260</p>
                    <li><i class="fa-solid fa-envelope"></i>
                    </li>
                    <p> rraghunath36@gmail.com</p>
                </div>
            </div>
        </div>
        <div className={style.but}>
            <button>Send</button>
        </div>
      </section>
     </div>
  )
}

export default Contact
