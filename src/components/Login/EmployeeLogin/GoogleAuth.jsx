import React from "react";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import './login.css'

const GoogleLoginButton = ({ clientId }) => {
  const navigate = useNavigate();

  const handleLogin = async (googleData) => {
    console.log("token", googleData);
    const code = googleData.code;
    const res = await fetch("http://localhost:6005/api/v1/auth/google", {
      method: "POST",
      body: JSON.stringify({
        code,
        redirect_uri: "http://localhost:5173/login",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("token", data.token);
      navigate("/user-dashboard");
    } else {
      console.error("Authentication failed", data.error);
    }
  };
  const signIn = useGoogleLogin({
    clientId,
    onSuccess: handleLogin,
    onError: () => console.log("Login Failed"),
    flow: "auth-code",
  });

  const handleClick = () => {
    console.log("inside function");
    signIn();
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    // <div className ="login-google">
    //    <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    // </div>
   
    <button className='login-google-authn'  onClick={handleClick}>
      <img src="./photos/google-icon.png" alt="google icon" className='login-google-authn-img'/>
      Sign in with Google
    </button>
    // <img src='./photos/google-button.png' alt="google icon" className='login-google-authn' onClick={handleClick}></img>
  );
};

export default GoogleLoginButton;
