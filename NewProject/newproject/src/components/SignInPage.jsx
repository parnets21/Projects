import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2'; // Make sure to install this package
import 'react-phone-input-2/lib/style.css';
import '../styles/signin.css'; // Add your styles here

const FormComponent = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  const handleSendOTP = () => {
    // Handle Send OTP logic here
    console.log('Send OTP to:', phone);
    setOtpSent(true); 
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Submitted OTP:', otp);
  };

  return (
    <form id="otp-form">
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <PhoneInput
          country={'in'}
          value={phone}
          onChange={setPhone}
          inputStyle={{ width: '100%', height: '40px', borderRadius: '5px' }}
        />
      </div>

      {!otpSent ? (
        <div className="form-group">
          <button type="button" className="theme-btn" onClick={handleSendOTP}>
            Send OTP
          </button>
        </div>
      ) : (
        <>
          <div className="form-group">
            <input
              type="text"
              name="otp"
              placeholder="Enter otp sent on Your Number"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <a href='/booknow'>
            <button type="button" className="theme-btn" onClick={handleSubmit}  
               >  Submit
            </button>
            </a>
          </div>
        </>
      )}
    </form>
  );
};

export default FormComponent;
