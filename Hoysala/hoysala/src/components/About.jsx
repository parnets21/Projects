import React from 'react';
import style from '../styles/about.module.css';
import { useNavigate } from 'react-router-dom';
import { Container} from 'react-bootstrap';

const About = () => {
    let navigate = useNavigate();

    let appointment = () => {
        navigate('/contact');
    };

    return (
        <div id={style.About}>
            <section id={style.about}>
                <div className={style.heading}>
                    <h1>About us</h1>
                   {/* <a href=""> <h2>Hoysala - About us</h2></a> */}
                </div>
                <div className={style.call}>
                    <div className={style.contact}>
                        <p> CALL US TODAY</p>
                            <h4>+91-9341285260</h4>
                    </div>
                </div>
            </section>

            <div className={style.about}>
                <div className={style.img}></div>
                <div className={style.content}>
                    {/* <h3>ABOUT US</h3> */}
                    <h3>We're providing the best customer service</h3>
                    <div>
                    <div className={style.img}></div>
                    <div className={style.heading}>
                        <p>
                        Founded in 1991 by R. Raghunath (B.E. Civil, M.E. Water Resources Engineering), Hoysala Construction has established itself as a premier construction company with a strong commitment to excellence, quality, and client satisfaction. Our expertise spans various construction sectors.
                        </p>
                        <p><b>R. Raghunath, Proprietor</b></p>
                    </div>
                    </div>
                    <p className='vision'><b>Our Vision and Mission</b></p>
                    <p><b>Vision :</b>To be a leader in the construction industry, known for our innovative approach, exceptional quality, and unwavering commitment to client satisfaction.</p>
                    <p><b>Mission :</b>To deliver superior construction projects that exceed our clients' expectations through meticulous planning, skilled craftsmanship, and a dedicated team of professionals.</p>
                    {/* <button>Learn more-</button> */}
                </div>
            </div>
            {/* <section id={style.workprocess}>
                <WorkProcess/>
            </section> */}
<section id={style.workprocess}>
       <Container>
        <div className='row col'>
        <div className={style.col}>
            <div className={style.row1}>
                <h2>Work Process</h2>
                <p>Our work process is designed to ensure efficiency, quality, and client satisfaction at every stage of the project.</p>
            </div>
            <div className={style.row2}>
                <div className={style.consultation}>
                    <h4>1. Consultation</h4>
                    <p>Understanding the client's needs, preferences, and budget is our first step.</p>
                </div>
                <div className={style.planning}>
                <h4>2. Planning</h4>
                <p> Our architects and designers create detailed plans and designs that align with the client's vision and regulatory requirements.</p>
                </div>
                <div className={style.approval}>
                    <h4>3. Approval </h4>
                    <p>We handle all necessary approvals and permits, ensuring compliance with local regulations and standards.</p>
                </div>
            </div>
            <div className={style.row3}>
                <div className={style.construction}>
                    <h4>4. Construction</h4>
                    <p> Our skilled team executes the construction process with a focus on quality, safety, and timely delivery.</p>
                </div>
                <div className={style.inspection}>
                    <h4>5. Inspection </h4>
                    <p>We conduct thorough inspections and quality control measures to ensure that the highest standards are met.</p>
                </div>
                <div className={style.handover}>
                    <h4>6. Handover</h4>
                    <p> Upon completion, we hand over the project to the client, ensuring  them  to  the their complete satisfaction.</p>
                </div>
            </div>
        </div>
        </div>
       
       </Container>
</section>
<section id={style.corevalue}>
    <Container>
        <div className={style.core}>
           <div className={style.value}>
            <h2>Our Core Values</h2>
           </div>
          <div className={style.value1}>
            <div className={style.quality}>
                <img src="/Assets/quality.png" height="100px" width="100px" alt="" />
                <h4>Quality</h4>
                <p> We are committed to maintaining the highest standards of quality in every project we undertake.</p>
            </div>
            <div className={style.integrity}>
            <img src="/Assets/integrity.png" height="100px" width="100px" alt="" />
                <h4>Integrity</h4>
                <p> We conduct our business with transparency, honesty, and integrity.</p>
            </div>
            <div className={style.innovation}>
            <img src="/Assets/innovation.png" height="100px" width="100px" alt="" />
                <h4>Innovation</h4>
                <p>We embrace new technologies and innovative approaches to deliver superior results.</p>
            </div>
            <div className={style.satisfaction}>
            <img src="/Assets/satisfaction.png" height="100px" width="100px" alt="" />
                <h4>Satisfaction</h4>
                <p> Our clients are at the heart of everything we do, and we strive to exceed their expectations.</p>
            </div>
          </div>
        </div>
    </Container>
</section>
          <div className={style.paragraph}>
                   <h2 className={style.para} >Our Teams</h2>   
            <p>At Hoysala Construction, our success is driven by a dedicated team of professionals who bring their expertise and passion to every project.</p></div>
            <div className={style.ourteam}>
                <div className={style.content}>
   <div className={style.teamcontainer}>        
          <img src="/Assets/architect.jpg" height="80px" width="80px" alt="" /><b>Architect</b>
          <p>Mr.Sushil Kulkarni</p>
          <img src="/Assets/design.jpg" height="80px" width="80px" alt="" /> <b>Design: </b>
          <p>Mr.Yogesh</p>
        <img src="/Assets/superviser.jpg" height="80px" width="80px" alt="" />  <b>Supervisor: </b>
        <p>Mr.Gajendra</p>
          <img src="/Assets/Chiefmason.jpg" height="80px" width="80px" alt="" /> <b>Chief Mistry </b>
          <p>Mr.Devaraj</p>
          <img src="/Assets/sitesenginner.jpg" height="80px" width="80px" alt="" /> <b> Sites Engineer </b>
          <p> Mr.Chandra Shekar</p>
    </div>
      {/* <button>Learn more-</button> */}
                </div>
                <div className={style.image}>
                </div>
            </div>
    <div className={style.para}>
    <p className={style.teamDescription}>
        Our team works collaboratively to ensure that each project is executed with precision, innovation, and quality.
      </p>
    </div>
            <div className={style.getquote}>
                <div className={style.content}>
                    <p className={style.quote}></p>
                    <h1>Build Your Future Today</h1>
                    <p className={style.quote1}>
                    Our team works collaboratively to ensure that each project is <br />executed with precision, innovation, and quality.
                    </p>
                    <button onClick={appointment}>Appointment-</button>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default About;
