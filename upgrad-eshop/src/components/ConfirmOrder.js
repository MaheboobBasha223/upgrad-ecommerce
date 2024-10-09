// src/components/ConfirmOrder.js

import React from 'react';

const ConfirmOrder = ({ address }) => {
  const handleConfirmOrder = async () => {
    const response = await fetch('/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ address }),
    });

    if (response.ok) {
      alert('Your order is confirmed.');
      // Redirect to the products page (you may want to use history.push here)
      window.location.href = '/'; // Replace with your products page
    }
  };

  return (
    <div>
      <h2>Confirm Order</h2>
      <p>Address: {address}</p>
      <button onClick={handleConfirmOrder}>Confirm Order</button>
    </div>
  );
};

export default ConfirmOrder;
