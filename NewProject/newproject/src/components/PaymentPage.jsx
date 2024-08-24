import React, { useState } from 'react';
import '../styles/payment.css';

const PaymentPage = () => {
  // const [paymentMethod, setPaymentMethod] = useState('card');

  return (
    <div className="payment-container">
      <h2>Order Details</h2>

      <div className="order-summary">
        <h3>Order Summary</h3>
        <p>Product Name: <span>Water Tank </span></p>
        <p>Quantity: <span>1</span></p>
        <p>Total Amount: <span>500</span></p>
      </div>
      <div className="address-container">
      <div className="your-address">
        <h3>Your Address</h3>
        <p>Bangalore</p>
      </div>
      <div>

        <button className="place-order-btn" onClick={() => window.location.href = '/ordersuccess'}>Place Order</button>
      <button className="go-back-btn" onClick={() => window.location.href = '/address'}>Go to Back</button>
      </div>
    </div>
      {/* <form>
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method</label>
          <select 
            id="paymentMethod" 
            name="paymentMethod" 
            value={paymentMethod} 
            onChange={(e) => setPaymentMethod(e.target.value)} 
            required
          >
            <option value="card">Credit/Debit Card</option>
            <option value="upi">UPI</option>
          </select>
        </div>

        {paymentMethod === 'card' && (
          <>
            <div className="form-group">
              <label htmlFor="cardName">Cardholder Name</label>
              <input type="text" id="cardName" name="cardName" placeholder="Enter the name on your card" required />
            </div>

            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input type="text" id="cardNumber" name="cardNumber" placeholder="1234 5678 9012 3456" required />
            </div>

            <div className="form-row">
              <div className="form-group col-6">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" required />
              </div>
              <div className="form-group col-6">
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="123" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="billingZip">Billing ZIP/Postal Code</label>
              <input type="text" id="billingZip" name="billingZip" placeholder="Enter your billing ZIP code" required />
            </div>
          </>
        )}

        {paymentMethod === 'upi' && (
          <div className="form-group">
            <label htmlFor="upiId">UPI ID</label>
            <input type="text" id="upiId" name="upiId" placeholder="Enter your UPI ID (e.g., user@bank)" required />
          </div>
        )}

        <div className="form-actions">
          <button type="submit" className="pay-btn">Pay Now</button>
          <button type="button" className="cancel-btn">Cancel</button>
        </div>
      </form> */}
    </div>
  );
};

export default PaymentPage;
