import React from 'react'
import "../styles/introduction.css"
import {  Button } from 'react-bootstrap';
const Introduction = () => {
  return (
    <div>
     <div className="container">
  <div className="row p-4">
    <div className='introduction'>
    <h1 className="text-center ">Some Highlights About Ivory Associate</h1>
    </div> <div className="col-md-6 p-4">
      <div className="intro" data-aos="zoom-in">
        <p><b>"Ivory Associates"</b> is entirely a firm wherein you will find ultimate resolutions to prove itself as Unique and it has dynamic assets like a team of professional with the association of 1 Supervisor, 1 Team Leader, 14 Field officers, 2 telecallers, well experienced in the fields of Enforcement, Debt Recovery, Skip tracing, and have good knowledge to educate defaulters in terms of CIBIL and Legal.</p>
        <p>We are pleased to inform you that we have an excellent infrastructure and sophisticated office with computer systems. Connected with high-speed internet. Our team members are committed to providing quality Debt Management services in all parts of Karnataka with a client-centered and result-oriented approach to the practice and further committed to following the highest standard of fair practice and ethics.</p>
        <p>We have our work station of 900 ft2. Our executives are equipped with Smart Phones and two-wheelers to enable them to increase their efficiency and to attend Customers' Calls immediately. All our executives represent respectable families, are well-cultured, and are dedicated and committed to their respective profession, wherein you can see better results through their hardships. We also have 2 Laptops for the field to bring customer satisfaction.</p>
      </div>
    </div>
    <div className="col-md-6 p-4">
      <div className="intro intro1" data-aos="zoom-in">
        <p><b>We strongly believe in continuously updating our knowledge and skill base, which keeps us abreast of the latest developments in Debt recovery law and helps us provide our clients with creative debt recovery solutions at all times.</b></p>
        <p>We are not just a traditional Debt Recovery agency engaged in the business of Debt Management. The prime factor we consider before handling a case for recovery of debt is what provisions of law should be invoked for the realization of Debt of our clients. The cases are handled on a case-by-case basis & each case is given equal importance irrespective of loan size & status of borrowers.</p>
        <p>We are driven by the strong conviction that the Enforcement Agency has to stay ahead of the needs of its clients. To this extent, we have always attempted to ensure that Debt recovery-related problems likely to affect its clients are addressed on a proactive basis. Providing practical business solutions instead of just legal solutions has been our credo.</p>
        <p>We constantly endeavor to build our expertise to keep pace with the potential gray areas which have posed new challenges to the client.</p>
      </div>
      <a href="/about"><button className="custom-button" >Know More</button></a>
    </div>
  </div>
</div>
 
    </div>
  )
}

export default Introduction
