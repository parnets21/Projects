import React from 'react'
import { Container } from 'react-bootstrap'
import "../styles/workprocess.css"
const WorkProcess = () => {
  return (
   <Container>
    <div className='workprocess'>
    <div className='row r1'>
    <h2>Work Process</h2>
    <p>Our work process is designed to ensure efficiency, quality, and client satisfaction at every stage of the project.</p> 
    </div>
    <div className='row r2'>
    <div className='col-md-4 consultation'>
    <h4>1.Consultation</h4>
    <p>Understanding the client's needs, preferences, and budget is our firs  step.</p>
    </div>
    <div className="col-md-4 planning">
    <h4>2.	Planning and Design:</h4>
    <p> Our architects and designers create detailed plans and designs that align with the client's vision and regulatory requirements.</p>
     </div>
     <div className="col-md-4 approval">
                    <h4>3.	Approval and Permits: </h4>
                    <p>We handle all necessary approvals and permits, ensuring compliance with local regulations and standards.</p>
                </div>
                <div className="col-md-4 construction">
                    <h4>4.	Construction:</h4>
                    <p> Our skilled team executes the construction process with a focus on quality, safety, and timely delivery.</p>
                </div>  
                <div className="col-md-4 inspection">
                    <h4>5.	Inspection and Quality Control: </h4>
                    <p>We conduct thorough inspections and quality control measures to ensure that the highest standards are met.</p>
                </div>
                <div className="col-md-4 handover">
                    <h4>6.	Handover:</h4>
                    <p> Upon completion, we hand over the project to the client, ensuring their complete satisfaction.</p>
                </div>
    </div>
    </div>
   </Container>
  )
}

export default WorkProcess
