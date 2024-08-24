import React from 'react'
import style from "../styles/contact.module.css"
const Contact = () => {
  return (
     <div className={style.container}>
        <div className={style.image} >
             <h1>CONTACT US</h1>
        </div>
         <section id={style.contact}>
        <div className={style.user}>
            <div className={style.userdata}>
                {/* <p>Appointment form</p> */}
                <h1>Get in Touch</h1>
                <form action="">
                    <input type="text"  placeholder='Your Name(Required)'/>
                    <input id={style.input2} type="phone" placeholder='Email(required)' /><br />
                    <input type="email" placeholder='Phone No' />
                    <select name="Rooms" id="rooms">Rooms
                     <option value="Room">Select Desposition</option>
                     <option value="Rooms">It Assets Desposition</option>
                     <option value="Rooms">All Metal Desposition</option>
                    
                     
                </select><br />
                    <textarea type="address"  placeholder='Leave us message'/>
                </form>
            </div>
            <div className={style.location}>
                <div className={style.address}>
                    <h2 className={style.quick}>Our location</h2>
                    <div className={style.locationimg}>
                    <a href="https://www.google.com/maps?q=12.832158,77.5700629&z=17&hl=en">
                    <img src={"/Assets/location.png"} height="70px" width="70px" alt="" /></a>
                    </div>
                    <p className='addres'> #19, New No 13/9, Bilwaradahalli, Shanubhoganahalli Main Road, opp. area 83, Jigani(H), Anekal(T),Bangalore-560083.</p>
                </div>
                <div className={style.email}>
                    <h2 className={style.quick}>Quik contact</h2>
                    <li><i class="fa-solid fa-phone-volume"></i>
                  </li>  <p> +91 8762414394 </p>
                  <p>+91 9972474042</p>
                    <li><i class="fa-solid fa-envelope"></i>
                    </li>
                    <p>kmkindustries22@gmail.com</p>
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
