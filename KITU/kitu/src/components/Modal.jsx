import React from 'react';
import "../styles/Modal.css";

const Modal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 >Contact Form</h4>
          <button className="close-button" onClick={onClose}><i class="fas fa-times" style={{color:"red",fontSize:"24px"}} /></button>
        </div>
        <div className="modal-body">
          <form>
            <label>Name <i class="fas fa-asterisk"  style={{color:"red" ,fontSize:"10px"}}/></label>
            <input type="text" required />
            
            <label>Contact Number  <i class="fas fa-asterisk"  style={{color:"red" ,fontSize:"10px"}}/></label>
            <input type="tel" required />

            <label>Gender  <i class="fas fa-asterisk"  style={{color:"red" ,fontSize:"10px"}}/></label>
            <select required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <label>Company  <i class="fas fa-asterisk"  style={{color:"red" ,fontSize:"10px"}}/></label>
            <input type="text" required />

            <label>Designation  <i class="fas fa-asterisk"  style={{color:"red" ,fontSize:"10px"}}/></label>
            <input type="text" required />

            <label>Residential Address  <i class="fas fa-asterisk"  style={{color:"red",fontSize:"10px"}}/></label>
            <textarea required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
