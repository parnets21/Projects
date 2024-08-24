import React from 'react'
import '../styles/achievement.css'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
const Achievement = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div className='container'>
    <div className="achievements-container" ref={ref}>
      <h1 className="achievements-title introduction ">Our Achievements</h1>
      <div className="achievements-grid">
        <div className="achievement-card">
          <div className="icon">
            <i className="fas fa-project-diagram"></i>
          </div>
          <h3>Successful Debt Recoveries</h3>
          {inView && <CountUp className="count" end={1000 } duration={3} suffix="+" />}
          {/* <p style={{color:"white", padding:"25px"}}>We have successfully recovered debts for over 1,000 clients, helping them regain financial stability</p> */}
        </div>
        <div className="achievement-card">
          <div className="icon">
            <i className="fas fa-smile"></i>
          </div>
          <h3>Client Satisfaction Rate</h3>
          {inView && <CountUp className="count" end={98} duration={3} suffix="%" />}
        </div>
        <div className="achievement-card">
          <div className="icon">
            <i className="fas fa-trophy"></i>
          </div>
          <h3>Awarded for Ethical Practices</h3>
          {inView && <CountUp className="count" end={10} duration={3}  />}
        </div>
        <div className="achievement-card">
          <div className="icon">
            <i className="fas fa-calendar-alt"></i>
          </div>
          <h3> Years of Industry Experience</h3>
          {inView && <CountUp className="count" end={15} duration={3} suffix='+'/>}
        </div>
        <div className="achievement-card">
          <div className="icon">
            <i className="fas fa-map-marked-alt"></i>
          </div>
          <h3>Expanding Across Karnataka</h3>
          {/* {inView && <CountUp className="count" end={10} duration={3} />} */}
          <p style={{color:"white"}}>We’ve extended our services to cover all major regions of Karnataka, with a growing presence in neighboring states</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Achievement
