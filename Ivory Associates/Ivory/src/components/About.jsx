import React, { useEffect } from 'react';
import '../styles/about.css';
import Portfolio from './Portfolio';
import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';


import { SlowMo } from "gsap/EasePack";

import { EaselPlugin } from "gsap/EaselPlugin";
// gsap.registerPlugin(ScrollTrigger);


gsap.registerPlugin(EaselPlugin,SlowMo);
const About = () => {

  useEffect(() => {
    // Animation for the about section
    gsap.from("#about", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
    });

    // Animation for the mission section
    gsap.from("#mission", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#mission",
        start: "top center",
      },
    });

    // Animation for the "Why Choose Us" section
    gsap.from(".col-md-6 img", {
      opacity: 0,
      x: -100,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".col-md-6 img",
        start: "top center",
      },
    });

    gsap.from(".col-md-6 h1, .col-md-6 p", {
      opacity: 0,
      x: 100,
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".col-md-6 h1",
        start: "top center",
      },
    });
  }, []);
  return (
    <div>
     <div id='about'>
       <div className="row  border-top justify-content-center p-3"  style={{color:"white",width:"100%"}}>
         <div className="col-md-10 pt-4" >
           <div className='about'>
           <h1 className='text-center p-2 welcome color-change'  data-aos="zoom-in">Welcome to Ivory Associates</h1>
            <p data-aos="zoom-in">At Ivory Associates, we’re not just another debt recovery firm; we are a team of professionals dedicated to delivering exceptional and unique solutions in debt management. Our dynamic team, consisting of a Supervisor, a Team Leader, 14 skilled Field Officers, and 2 experienced Telecallers, brings a wealth of expertise in Enforcement, Debt Recovery, and Skip Tracing. We also excel in educating defaulters on CIBIL regulations and legal obligations, ensuring a comprehensive approach to recovery.</p>
            <p data-aos="zoom-in">Our commitment to quality service is backed by a state-of-the-art infrastructure. Our sophisticated office, equipped with the latest computer systems and high-speed internet, serves as the backbone of our operations. We proudly provide debt management services across Karnataka, guided by a client-centric, result-oriented philosophy. Integrity and ethical practices are at the core of everything we do.</p>
            <p data-aos="zoom-in">Our 900 square foot workspace is designed for maximum efficiency. Our executives, equipped with smartphones and two-wheelers, are always ready to respond promptly to client needs, ensuring top-tier service delivery. Representing respectable backgrounds and embodying professionalism, our team is dedicated to achieving outstanding results. To further enhance customer satisfaction, we also utilize laptops for on-the-go field operations.</p>
            <p data-aos="zoom-in">At Ivory Associates, we believe in continuous growth and learning. We stay at the forefront of debt recovery law, constantly updating our knowledge and skills to provide innovative, creative solutions that work in today’s dynamic environment.</p>
            <p data-aos="zoom-in">What sets us apart is our proactive approach to debt recovery. We don’t just apply traditional methods; we tailor our strategies to each unique case, carefully considering the legal provisions necessary for the best outcomes. Whether dealing with large or small debts, every case is treated with equal importance and meticulous attention to detail.</p>
            <p data-aos="zoom-in">We understand that our clients’ needs are ever-evolving, and we are committed to staying ahead of these changes. Our focus is on providing practical, business-oriented solutions, not just legal advice. We constantly build our expertise to address emerging challenges, ensuring that our clients receive the most effective and forward-thinking strategies available.</p>
           </div>
              </div>
       </div>
     </div>

     <section id='mission'>
     <div class="container">
    <div class="mission-vision-values">
        <div class="section">
            <h2>Our Mission</h2>
            <p data-aos="zoom-in">
                At Ivory Associates, our mission is to provide exceptional debt recovery services that are rooted in integrity, professionalism, and innovation. We are committed to helping our clients recover outstanding debts efficiently and ethically, while educating defaulters on their legal responsibilities. Through continuous learning and adaptation, we aim to stay ahead of industry challenges, delivering proactive, practical solutions that meet the evolving needs of our clients. Our ultimate goal is to foster trust and build long-lasting relationships by consistently achieving outstanding results.
            </p>
        </div>

        <div class="section">
            <h2>Our Vision</h2>
            <p data-aos="zoom-in">
                Our vision at Ivory Associates is to be the leading provider of innovative and ethical debt recovery solutions, recognized for our commitment to excellence and our ability to adapt to the ever-changing landscape of debt management. We strive to create a positive impact on the industry by setting new standards in client service, education, and recovery practices. Through our dedication to continuous improvement and proactive strategies, we envision a future where we are the trusted partner for organizations across Karnataka and beyond, helping them achieve financial stability and growth.
            </p>
        </div>

        <div class="section values">
            <h2>Our Values</h2>
            <ul >
                <li data-aos="zoom-in" ><strong>Integrity:</strong> We uphold the highest standards of honesty and ethics in all our actions, ensuring transparency and fairness in our debt recovery practices.</li>
                <li data-aos="zoom-in"><strong>Excellence:</strong> We are committed to delivering superior results by continuously improving our knowledge, skills, and services, striving for excellence in everything we do.</li>
                <li data-aos="zoom-in"><strong>Client-Centricity:</strong> Our clients' needs are at the heart of our operations. We focus on building strong, long-term relationships by providing tailored, effective solutions that align with their goals.</li>
                <li data-aos="zoom-in"><strong>Professionalism:</strong> We conduct our business with the utmost professionalism, treating every case with respect, attention, and dedication, regardless of its size or complexity.</li>
                <li data-aos="zoom-in"><strong>Innovation:</strong> We embrace change and seek out innovative strategies to stay ahead in the dynamic field of debt management, ensuring our clients benefit from the latest and most effective solutions.</li>
                <li data-aos="zoom-in"><strong>Responsibility:</strong> We are committed to our social responsibility by educating defaulters on their legal obligations and promoting ethical debt recovery practices that benefit both our clients and the broader community.</li>
                <li data-aos="zoom-in"><strong>Teamwork:</strong> We believe in the power of collaboration. Our team works closely together, combining diverse skills and perspectives to achieve the best outcomes for our clients.</li>
            </ul>
        </div>
    </div>
</div>

     </section>

     <section id='about1'>
    <div className="container ">
      <div className="row p-2 " data-aos="zoom-out" >
     <div className='workprocess'>
     <h1 className='color-change ' style={{textAlign:"center" , color:"white"  }}>Why Choose Us</h1>
     </div>

<div className="col-md-4">
      <div className="what-we-do">
        <h4>1.	Proven Expertise</h4>
        <p>With a highly experienced team specializing in Enforcement, Debt Recovery, and Skip Tracing, Ivory Associates has the knowledge and skills to handle even the most complex cases. Our track record of successful recoveries speaks for itself.</p>
      </div>
    </div>

        <div className="col-md-4"> <div className='what-we-do'>
          <h4>2.	Tailored Solutions</h4>
          <p>We understand that every debt recovery situation is unique. That’s why we take a personalized approach, crafting strategies that are specifically designed to meet the individual needs of our clients.</p>
          </div> </div>

        <div className="col-md-4"> <div className='what-we-do'>
        <h4>3.	Ethical Practices</h4>
        <p>We are committed to maintaining the highest standards of ethics and integrity in all our operations. Our transparent and fair practices ensure that your reputation remains intact while achieving the desired results.</p>
        </div> </div>

        <div className="col-md-4"> <div className='what-we-do'>
        <h4>4.	Client-Centric Approach</h4>
        <p>At Ivory Associates, our clients are our top priority. We work closely with you, keeping you informed at every stage of the recovery process and ensuring that your goals are fully met.</p>
        </div> </div>
        
        <div className="col-md-4"> <div className='what-we-do'>
        <h4>5.	Advanced Infrastructure</h4>
        <p>Our state-of-the-art office, equipped with the latest technology and high-speed internet, allows us to operate efficiently and effectively. Our field officers are well-equipped to respond quickly and professionally to any situation.</p>
        </div> </div>
        
        <div className="col-md-4"> <div className='what-we-do'>
        <h4>6.	Proactive Strategies</h4>
        <p>We don’t just react to debt recovery challenges; we anticipate them. By staying ahead of industry trends and continuously updating our methods, we ensure that our clients receive the most innovative and effective solutions.</p>
        </div> </div>
        
        <div className="col-md-4"> <div className='what-we-do'>
        <h4>7.	Comprehensive Support</h4>
        <p>From the initial consultation to the final resolution, we offer full support at every step of the debt recovery process. Our dedicated team is always available to address your concerns and provide expert guidance.</p>
        </div> </div>
        
        <div className="col-md-4"> <div className='what-we-do'>
        <h4>8.	Commitment to Results</h4>
        <p>We are driven by a results-oriented mindset. Our focus is on achieving the best possible outcomes for our clients, ensuring that their financial interests are protected and enhanced</p>
        </div> </div>
        
    </div>
    </div>
  </section>
    <section>
       <Portfolio/>
    </section>
        </div>
  )
}

export default About
