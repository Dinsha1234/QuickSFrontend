import React from 'react'
import { useState } from 'react'
import OtpInput from './OtpInput'
import './adminlogin.css'
import { useNavigate } from 'react-router-dom'


const LoginWithOtp = () => {
  const navigate = useNavigate()
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isOtp, setOtp] = useState(false)
  const [isPh, setIsPh] = useState(false)
  const [otpVal, setotpVal] = useState("")

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value)
  }

  const handlePhoneSubmit = async(event) => {
    event.preventDefault()
    setOtp(true)
    const res= await fetch("http://localhost:6005/api/v1/auth/generate-otp", {
      method: "POST",
      body: JSON.stringify({phoneNumber}),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    if(res.ok){
      console.log('OTP GENERATED SUCCESS!',data.otp)
      
    }else{
      console.error('Authentication failed', data.error)
    }
  }

  const onOTPSubmitFunc = (otp) => {
    setIsPh(true)
    setotpVal(otp)
  }

  const handleValidation = async() => {
    console.log(otpVal)
    debugger
    const res= await fetch("http://localhost:6005/api/v1/auth/verify-otp", {
      method: "POST",
      body: JSON.stringify({inputOtp: otpVal, phoneNumber}),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    if(res.ok){
      localStorage.setItem('AdminToken', data.token)
      navigate('/admin-dashboard')
    }else{
      console.error('Authentication failed', data.error)
    }

  }

  const regex = /[^0-9]/g
  return (
    <div>
      {!isOtp ? 
        <div className='main-otp-display'>
        <p className='main-admin-lgn'>Log in or sign up to continue</p>
        <form onSubmit={handlePhoneSubmit}>
          <input type="text" id="mobile" onChange={handlePhoneNumber} required />
          <label htmlFor="mobile">Enter your mobile number</label>
          {phoneNumber.length >= 10 && !regex.test(phoneNumber) && <button type="submit" className='get-otp-btn'>GET OTP</button> }
        </form>
        </div> : 
        <div>
          <p className='otp-sender-ttl'>Enter OTP sent to +91{phoneNumber}</p>
          <OtpInput length={4} onOTPSubmit={onOTPSubmitFunc}/>
          {isPh ? <button className='continue-btn-otp' onClick={handleValidation}>Continue</button> : ''}
        </div>
      }
    </div>
  );
}

export default LoginWithOtp
