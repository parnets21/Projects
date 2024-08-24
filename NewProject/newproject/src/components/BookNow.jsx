import React from 'react';
import "../styles/booknow.css";
import { Link } from 'react-router-dom';

const BookNow = () => {
  return (
    <div className="container booking-container">
      <div className="row">
        <div className="col-md-4"data-aos="zoom-in" data-aos-easing="ease-in-sine" >
          <img src="/Assets/tanker1.jpg" alt="Water Tanker" className="tanker-img" />
        </div>
        <div className="col-md-8" data-aos="zoom-in" data-aos-easing="ease-in-sine" >
          <div className="booking-header"  >
            <h2>Book Water Tanker</h2>
          </div>
          <p className="booking-subheader">
            Book Water Tanker Service<br />
            <span>Get Latest Price</span>
          </p>
          <p className="booking-details">
            <b>Liters Quantity of Tanker:</b> 500 – 20,000 Liters <br />
            <b>Pipe Provided on Tanker:</b> 100 ft <br />
            <b>Motor Pump Service:</b> Yes <br />
            <b>Bill/Challan Provided:</b> Yes
          </p>
          <div className="booking-options">
            <p>
              <label>Water In Liter:</label>
              <select name="liter" id="liter">
                <option value="">Choose Option</option>
                <option value="bulk">Bulk Supply</option>
                <option value="500">Upto 500 Liters</option>
                <option value="1000">Upto 1000 Liters</option>
                <option value="1500">Upto 1500 Liters</option>
                <option value="3000">Upto 3000 Liters</option>
                <option value="5000">Upto 5000 Liters</option>
                <option value="10000">Upto 10000 Liters</option>
                <option value="10000plus">More than 10,000 Liters</option>
              </select>
            </p>
            <p>
              <label>Water Quality:</label>
              <select name="quality" id="quality">
                <option value="">Choose</option>
                <option value="drinking">Drinking Water</option>
                <option value="non-drinking">Non-Drinking Water</option>
              </select>
            </p>
          </div>
          <div className="booking-button">
            <Link to="/address"><button>Book Now</button></Link>
            <Link to="/"><button>Go to Back</button></Link>
            {/* <button type="button" className="save-btn" >CANCEL</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookNow;
