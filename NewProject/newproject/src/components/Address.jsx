import React from 'react';
import '../styles/address.css';
import { Link } from 'react-router-dom';

const Address = () => {
  return (
   <div className="container">
     <div className="shipping-container" data-aos="zoom-out" data-aos-easing="ease-in-sine" >
      <h2>Shipping Address</h2>
      <form>
        <div className="form-row">
          <div className="form-group col-6">
            <input type="text" id="fullName" name="fullName" placeholder="Name" required />
          </div>
          <div className="form-group col-6">
            <input type="tel" id="phone" name="phone" placeholder="10-digit mobile number" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-6">
            <input type="text" id="pincode" name="pincode" placeholder="Pincode" required />
          </div>
          <div className="form-group col-6">
            <input type="text" id="locality" name="locality" placeholder="Locality" required />
          </div>
        </div>

        <div className="form-group">
          <input type="text" id="addressLine1" name="addressLine1" placeholder="Address (Area and Street)" required />
        </div>

        <div className="form-row">
          <div className="form-group col-6">
            <input type="text" id="city" name="city" placeholder="City/District/Town" required />
          </div>
          <div className="form-group col-6">
            <select id="state" name="state" required>
              <option value="">-- Select State --</option>
              <option value="India">Karnatka</option>
              {/* <option value="">-- Select State --</option> */}
         
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-6">
            <input type="text" id="landmark" name="landmark" placeholder="Landmark (Optional)" />
          </div>
          <div className="form-group col-6">
            <input type="tel" id="altPhone" name="altPhone" placeholder="Alternate Phone (Optional)" />
          </div>
        </div>

        <div className="addresstype">
          <label>Address Type:</label>
          <label>
            <input type="radio" name="addressType" value="home" defaultChecked /> Home
          </label>
          <label>
            <input type="radio" name="addressType" value="work" />Office
          </label>
        </div>

        <div className="form-actions">
         <Link to="/payment"> <button type="submit" className="save-btn">
        SAVE AND DELIVER HERE</button></Link>
        <button className="save-btn" onClick={() => window.location.href = '/booknow'}>Go to Back</button>

          <button type="button" className="save-btn" onClick={()=>window.location.href='/'}>CANCEL</button>
          {/* <button onClick={() => window.location.href = '/'}>Go to Home</button> */}
        </div>
      </form>
    </div>
   </div>
  )
}

export default Address;
