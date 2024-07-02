import React, { useState } from 'react';
import OtpInput from './OtpInput';

const PhoneOtpForm = () => {
  const [phoneNumber, handlePhoneNumber] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneInput = (e) => {
    handlePhoneNumber(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const regex = /[^0-9]/g;

    if(phoneNumber.length < 10 || regex.test(phoneNumber)){
      alert('Invalid Phone Number');
      return
    }

    setShowOtpInput(true);
  }

  const onOtpSubmit = (otp) => {
    console.log('Login Successfull ', otp);
  };

  return (
    <div>
      {!showOtpInput ? (  
        <form onSubmit={handleFormSubmit}>
          <input 
            type='text'
            placeholder='Enter your Phone Number'
            value={phoneNumber}
            onChange={handlePhoneInput}
          />
          <input type='submit' />
        </form>
      ) : (
        <div>
          <p>Entered OTP sent to {phoneNumber}</p>
          <OtpInput length = {4} onOtpSubmit={onOtpSubmit}/>
        </div>
      )}
    </div>
  )
}

export default PhoneOtpForm