import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import "./adminlogin.css";

const OtpInput = ({ length = 4, onOTPSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  console.log(otp);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    //checking if entered values are all numbers
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    const combinedOtp = newOtp.join("");
    //need to add the continue button
    if (combinedOtp.length === length) onOTPSubmit(combinedOtp);

    //Move to next field when current input is filled.
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);
  };
  return (
    <div>
      {otp.map((value, index) => {
        console.log("val", value);
        return (
          <input
            type="text"
            className="otpInput"
            key={index}
            value={value}
            ref={(input) => (inputRefs.current[index] = input)}
            onChange={(e) => handleChange(index, e)}
            onClick={(e) => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
          ></input>
        );
      })}
    </div>
  );
};

export default OtpInput;
