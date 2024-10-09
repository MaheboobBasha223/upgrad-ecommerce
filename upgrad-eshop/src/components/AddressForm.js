
import React, { useEffect, useState } from 'react';


const token='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBkZW1vLmNvbSIsImlhdCI6MTcyODEzNjA1MCwiZXhwIjoxNzI4MTQ0NDUwfQ.AYN9TiodStGZPs0SQNN52t8OYWmJQdVxHNpTXvZs5l4BNNAmF9FtEab3Liq7o0Sm7KzSAvy09miaxtWJl1Eajw'
const AddressForm = ({ addressList, onAddressSelect, onAddressSave }) => {
  const [newAddress, setNewAddress] = useState({
    name: '',
    contactNumber: '',
    street: '',
    city: '',
    state: '',
    landmark: '',
    zipCode: '',
  });
  
  useEffect(() => {
    const fetchAddresses = async () => {
        try {
            const response = await fetch('https://dev-project-ecommerce.upgrad.dev/api/addresses');
            if (!response.ok) {
                throw new Error('Failed to fetch addresses');
            }
            const data = await response.json();
            onAddressSave(data); // Set the addresses fetched from API
        } catch (error) {
            console.log(error.message);
        } 
    };

    fetchAddresses();
}, [onAddressSave]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveAddress = async () => {
   
 if (Object.values(newAddress).some((field) => !field)) {
      alert('Please fill in all fields');
     return;
    }

    // Make POST request to save the address
    try {
      const response = await fetch('https://dev-project-ecommerce.upgrad.dev/api/addresses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
        body: JSON.stringify(newAddress),
      });
      
      if (!response.ok) {
        throw new Error('Failed to save address');
      }

      const savedAddress = await response.json();
      onAddressSave(savedAddress);
      // Call the parent function with the saved address

      // Clear the form
      setNewAddress({
        name: '',
        contactNumber: '',
        street: '',
        city: '',
        state: '',
        landmark: '',
        zipCode: '',
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
   
    <div>
     
      <h2>Address Details</h2>
      
     
      <select onChange={(e) => onAddressSelect(e.target.value)}>
        <option value="">Select an address</option>
      
        {addressList.map((address, index) => (
          <option key={index} value={JSON.stringify(address)}>
            {`${address.name}, ${address.street}, ${address.city}, ${address.state}`}
          </option>
        ))}
    
      </select>
      <br />

      <h3>Add New Address</h3>
      <input
        type="text"
        name="name"
        value={newAddress.name}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <input
        type="number"
        name="contactNumber"
        value={newAddress.contactNumber}
        onChange={handleInputChange}
        placeholder="Contact Number"
      />
      <input
        type="text"
        name="street"
        value={newAddress.street}
        onChange={handleInputChange}
        placeholder="Street"
      />
      <input
        type="text"
        name="city"
        value={newAddress.city}
        onChange={handleInputChange}
        placeholder="City"
      />
      <input
        type="text"
        name="state"
        value={newAddress.state}
        onChange={handleInputChange}
        placeholder="State"
      />
      <input
        type="text"
        name="landmark"
        value={newAddress.landmark}
        onChange={handleInputChange}
        placeholder="Landmark"
      />
      <input
        type="number"
        name="zipCode"
        value={newAddress.zipCode}
        onChange={handleInputChange}
        placeholder="Zip Code"
      />
      <button onClick={handleSaveAddress}>Save Address</button>
    </div>
  );
};

export default AddressForm;