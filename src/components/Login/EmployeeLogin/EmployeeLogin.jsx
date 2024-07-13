import React from 'react'
import GoogleAuth from './GoogleAuth';
import './login.css'

const EmployeeLogin = () => {
  const clientId = import.meta.env.VITE_CLIENT_ID
  return (
    <div>
    <img className="main-img-hdr-box" src="./photos/logo.png" alt="logo"></img> 
    <div className='google-lgn'>
      <GoogleAuth clientId={clientId}/>
    </div>
    </div>
    
  )
  
}

export default EmployeeLogin
