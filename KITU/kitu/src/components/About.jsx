import React, { useState } from 'react'
import "../styles/About.css"
import Modal from './Modal';
const About = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div id='about'>
        <div className='about'>
        <h1>Welcome to KITU</h1>
        <p>The First General Body meeting of the Karnataka State IT/ITeS Employees’ Union (KITU) had convened at YWCA Hall, Koramangala, Bangalore, on 20/08/2017. The union received the registration certificate from Labour Department on 7/10/2017.</p>
        <p>
        Any employee belonging to the Information Technology/Information Technology Enabled Services or Computer/Software-aided work in the State of Karnataka, working directly as employees or through a contractor on work based contract or labour supply or in any other form shall be entitled to become a member of the union</p>
        <p>KITU members are organizing to win better conditions today and to build a better world tomorrow</p>
        </div>
        </div>

      <div className="container">
       
         <section id='sec1'>
         <div className="row ">
          <div className="col-md-6">
          <div><img src="/Assets/image5.jpg" alt="joinnow images"  style={{height:"550px",width:"90%"}}/></div>
          </div>
          <div className="col-md-6">
          {/* <div><h1>About Us</h1></div> */}
          <h3>About Us</h3>
            <p>The Karnataka State IT/ITeS Employees’ Union (KITU) was officially formed to represent
and protect the rights of employees working in the Information Technology (IT) and
Information Technology Enabled Services (ITeS) sectors across the state of Karnataka. Our
journey began with the First General Body meeting held at YWCA Hall, Koramangala,
Bangalore, on the 20th of August, 2017. This historic meeting laid the foundation for a
collective voice that would resonate throughout the industry. Following this, KITU proudly
received its registration certificate from the Labour Department on the 7th of October, 2017.</p>
<p>We believe that every employee working within the IT/ITeS or Computer/Software-aided
sectors, whether directly employed or through a contractor, on a work-based contract, labour
supply, or in any other capacity, deserves fair treatment, job security, and a platform to
address their concerns. KITU welcomes all such professionals across Karnataka to join us in
our mission.</p>
<p>Our union is more than just an organization; it is a movement driven by the collective
aspirations of our members. We are organizing to win better working conditions today and
are committed to building a better world for tomorrow. Together, we are strong, and together,
we can achieve the change we seek.</p>
          </div>
        </div>
         </section>
         </div>


      <section id='sec2'>
       <div className="container">
       <div className="row">
          <div className="col-md-6 ">
          <div className='why-join'><h3>Why Join KITU?</h3>
      
          <p>Joining the Karnataka State IT/ITeS Employees’ Union (KITU) means becoming part of a
powerful collective dedicated to improving the lives and working conditions of IT/ITeS
professionals across Karnataka. Here’s why you should consider becoming a member.</p>
          <p>Protect Your Rights: As an employee in the IT/ITeS sector, your rights can
sometimes be overlooked or compromised. KITU stands as a strong advocate for your rights, ensuring that you are treated fairly, with respect and dignity, and that your
voice is heard in the workplace.</p>  
<p>Collective Bargaining Power: When you join KITU, you are not alone. Together, we
negotiate better working conditions, fair wages, and job security on behalf of all our
members. The power of a collective voice can lead to significant improvements that
might be difficult to achieve individually.</p>  
<p>Shape the Future of the Industry: KITU members are at the forefront of shaping the
future of the IT/ITeS sector in Karnataka. Through active participation, you can
influence policies, advocate for sustainable practices, and ensure that the industry
evolves in a way that benefits all workers.</p>
<p>Empower Yourself: Being part of KITU empowers you with knowledge, resources,
and the collective strength to stand up for your rights. It’s about taking control of your
work life and making sure that your contributions are valued and respected.</p>
<div>
      <button onClick={() => setShowModal(true)} className='footer-joinus'>Join Us</button>
      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </div>
           </div>
           
            </div>
          <div className="col-md-6">
          <div><img src="/Assets/image5.jpg" alt="joinnow images"  style={{height:"575px",width:"95%"}}/></div>
           
          </div>
          
        </div>
       </div>
      </section>


      <section id='sec3'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
            <div><img src="/Assets/image5.jpg" alt="joinnow images"  style={{height:"600px",width:"95%"}}/></div>
            </div>
            <div className="col-md-6">
            <div className='why-donate'>
            <h3>Why Donate to KITU?</h3>
              <p>Supporting the Karnataka State IT/ITeS Employees’ Union (KITU) through donations is an
investment in the future of fair labour practices and the well-being of IT/ITeS professionals
across Karnataka. Here’s why your contribution matters:</p>
           <p>Strengthen the Union’s Advocacy Efforts: Donations enable KITU to continue its
vital work advocating for the rights and interests of IT/ITeS employees. Your support
helps us engage with policymakers, conduct research, and develop campaigns that
fight for fair wages, job security, and better working conditions.</p>
<p>Empower IT/ITeS Employees: By donating to KITU, you empower thousands of
workers in the IT/ITeS sector who may otherwise struggle to have their voices heard.
Your contribution directly supports initiatives that provide these workers with the
resources and representation they need to improve their work environment.</p>
<p>5. Build a Resilient Community: KITU is more than just a union; it’s a community.
Donations help us organize events, meetings, and activities that bring members
together, fostering solidarity and mutual support. These gatherings strengthen our
collective resolve and ensure that no one in our community faces challenges alone.</p>
<p>Support Crisis Relief Efforts: In times of crisis, whether it&#39;s job losses, workplace
accidents, or industry downturns, KITU steps in to support affected members. Your
donations allow us to provide immediate assistance, including financial aid,
counseling, and job placement services, helping members get back on their feet.</p>
              </div>
              <a href="">< button className='donate'>Donate</button></a>
            </div>
          </div>
        </div>
      </section>

      </div>
  
  )
}

export default About
