// Services.js
import React, { useState } from 'react';
import '../styles/service.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const Services = () => {
    let[serves,setService]=useState(true);
    let[serves1,setService1]=useState(false);
    let[serves2,setService2]=useState(false);
    let[serves3,setService3]=useState(false);
    let[serves4,setService4]=useState(false);
    return (
      
        <div>
            <div className="container">
                <div className='ourservice'><h1 className='animatedText '>Our Services</h1></div>
                <div className="row ">
                    <div className="col-md-4  ">

                       <div className='serviece'>
                       <button  className='butt' onClick={()=>{
                        setService(true); setService1(false); setService2(false);
                        setService3(false); setService4(false); }} >Debt Recovery</button>
                        </div>

                        <div className='serviece'> 
                    <button className='butt'  onClick={()=>{
                        setService(false); setService1(true); setService2(false);
                        setService3(false); setService4(false); }} >Enforcement</button></div>
                   
                   <div className='serviece'>
                    <button className='butt'  onClick={()=>{
                        setService(false); setService1(false); setService2(true);
                        setService3(false); setService4(false); }}>Skip Tracing</button></div>
                   
                    <div className='serviece'> <h4></h4>
               <button className='butt'  onClick={()=>{
                        setService(false); setService1(false); setService2(false);
                        setService3(true); setService4(false); }}>Legal Assistance</button></div>
                   
                   <div className='serviece'>
                    <button className='butt'  onClick={()=>{
                        setService(false); setService1(false); setService2(false);
                        setService3(false); setService4(true); }}>Additional Services</button></div>
                   
                        </div> 
                        <div className="col-md-8 ">
                        {
                  serves?(<>
                      <div className="row justify-content-center">
                        <div className="col-md-12">
                        <div className='detailservicees'><h4 className=''> Details About Debt Recovery </h4>
                        <p>Our Debt Recovery service is designed to help clients regain control over their finances by recovering outstanding debts swiftly and efficiently. With a proven track record of successful recoveries, we employ a tailored approach that ensures each case is handled with the utmost care and professionalism. Our team is adept at navigating complex cases, using a blend of strategic communication and legal expertise to achieve optimal results for our clients.</p></div>
                        </div>
                      </div>
                   
                </>):(<>{
                    serves1?(<><div>
                        <div className="row justify-content-center">
                      <div className="col-md-12">
                      <div className='detailservicees'>
                      <h4 className=''>Details About Enforcement</h4><p>Enforcement is a critical aspect of our services, where we take decisive action to ensure compliance with legal obligations. Our enforcement team works closely with clients to execute court orders, repossess assets, and enforce judgments, all while adhering to the highest ethical standards. We ensure that the enforcement process is carried out effectively, with minimal disruption, and in full accordance with the law.</p></div>
                      </div>
                        </div>
                    </div></>):(<>{
                        serves2?(<><div>
                            <div className="row justify-content-center ">
                           <div className="col-md-12">
                           <div className='detailservicees'>
                           <h4 className=''>Details About Skip Tracing</h4><p>Our Skip Tracing service is dedicated to locating individuals who have become difficult to find, often in the context of debt recovery or legal proceedings. Using advanced technology and investigative techniques, our skilled team can trace debtors who have gone off the radar, ensuring that no stone is left unturned in the pursuit of recovery. This service is crucial for clients looking to resolve long-standing or complex cases.</p></div>
                           </div>
                            </div>
                        </div></>):(<>{
                            serves3?(<><div>
                                <div className="row justify-content-center">
                                    <div className="col-md-12">
                                    <div className='detailservicees'>
                                    <h4 className=''>Details About Legal Assistance</h4>
                                    <p>Navigating the legal complexities of debt recovery and enforcement can be challenging, which is why we offer comprehensive Legal Assistance to our clients. Our legal experts provide guidance on the most effective legal avenues available, ensuring that every action taken is within the framework of the law. Whether it's drafting legal documents, representing clients in court, or providing counsel on regulatory compliance, our team is here to support you every step of the way.</p>
                                    </div>
                                    </div>
                                </div>
                            </div></>):(<>{
                                serves4?(<><div>
                                    <div className="row justify-content-center">
                                  <div className="col-md-12">
                                  <div className='detailservicees'>
                                   <h4 className=''>Details About Additional Services</h4>
                                    <p>Beyond our core offerings, Ivory Associates provides a range of Additional Services tailored to meet the diverse needs of our clients. These include CIBIL score improvement, debtor education, credit counseling, and bespoke financial solutions. Our goal is to provide a holistic approach to debt management, ensuring that our clients are well-equipped to maintain financial stability in the long term.</p></div>
                                  </div>
                                    </div>
                                </div></>):(<></>)
                            }</>)
                        }</>)
                    }</>)
                  }</>)
                }

                          
                        </div>  
                </div>
               


                
            </div>
        </div>
    );
};

export default Services;
