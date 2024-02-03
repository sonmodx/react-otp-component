import React, { useRef, useState } from "react";
import "./OTPForm.css";

const OTPForm = ({ length, validOTP }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const otpRefs = useRef([]);

  const handleChange = (e, index) => {
    const newOtp = [...otp];
    const value = e.target.value;
    //check only number
    if (isNaN(value) || value === " ") return;
    //get only last number
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    //check success input
    const fullOTP = newOtp.join("");
    if (length === fullOTP.length) {
      return validOTP(fullOTP);
    }

    //move forward
    if (value) {
      //move to first empty input
      const nextIndex = newOtp.indexOf("");
      if (nextIndex === -1) return;

      otpRefs.current[nextIndex].focus();
    }
  };

  const handleClick = (index) => {
    //set current text selection to end positon
    otpRefs.current[index].setSelectionRange(1, 1);
  };

  const handleKeydown = (e, index) => {
    //go backward ,if key is Backspace and index > 0 and have no value in current input
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      otpRefs.current[index - 1].focus();
    }
  };
  return (
    <div className="OTPForm">
      {otp?.map((value, index) => (
        <input
          key={index}
          type="text"
          value={value}
          ref={(ref) => {
            otpRefs.current[index] = ref;
          }}
          onChange={(e) => handleChange(e, index)}
          onClick={() => handleClick(index)}
          onKeyDown={(e) => handleKeydown(e, index)}
        />
      ))}
    </div>
  );
};

export default OTPForm;
