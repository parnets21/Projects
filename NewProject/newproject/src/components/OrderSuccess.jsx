import React from 'react';
import '../styles/ordersuccess.css'; // Assuming you're using a separate CSS file

function OrderSuccess() {
  return (
    <div className="order-success-container">
      <h1>Order Placed Successfully!</h1>
      <p>Thank you for your order. Your order number is #12345.</p>
      <button onClick={() => window.location.href = '/'}>Go to Home</button>
    </div>
  );
}

export default OrderSuccess;
