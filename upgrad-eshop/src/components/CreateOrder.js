// src/components/CreateOrder.js


// src/CreateOrder.js
import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography } from '@mui/material';
import AddressForm from './AddressForm';
import ConfirmOrder from './ConfirmOrder';

const steps = ['items','Address Details', 'Confirm Order'];

const CreateOrder = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState('');
  const [addressList, setAddressList] = useState([]);
  const [error, setError] = useState('');

  const handleNext = () => {
    if (activeStep === 1 && !selectedAddress) {
      setError('Please select an address!');
      return;
    }
    setError('');
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleAddressSelect = (addressString) => {
    if (addressString) {
      const address = JSON.parse(addressString);
      setSelectedAddress(address);
    } else {
      setSelectedAddress('');
    }
  };
 
  
  //console.log("addreess"+address);
  const handleAddressSave = (newAddress) => {
    setAddressList((prevList) => [...prevList, newAddress]);
    console.log("add"+addressList);
    setSelectedAddress(newAddress);
  };

  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {error && <Typography color="error">{error}</Typography>}

      {activeStep === 1 && (
        <AddressForm
          addressList={addressList}
          onAddressSelect={handleAddressSelect}
          onAddressSave={handleAddressSave}
        />
      )}

      {activeStep === 2 && (
        <ConfirmOrder address={selectedAddress} />
      )}

      <div>
        <Button disabled={activeStep === 1} onClick={handleBack}>
          Back
        </Button>
        <Button onClick={handleNext}>
          {activeStep === steps.length - 1 ? 'Confirm Order' : 'Next'}
        </Button>
      </div>
    </div>
  );
};

export default CreateOrder;


