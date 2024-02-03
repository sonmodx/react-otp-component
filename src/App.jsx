import { useState } from "react";
import "./App.css";
import OTPForm from "./components/OtpForm";

function App() {
  const secretOTP = import.meta.env.VITE_SECRET_OTP;
  const [isValidOTP, setIsValidOTP] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const validOTP = (otp) => {
    if (secretOTP === otp) {
      setIsValidOTP(true);
    } else {
      setIsValidOTP(false);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <header>
          <h1 className="shake">OTP COMPONENT</h1>
        </header>
        <h2 className="phone-number">Login with Phone Number: xxx-xxx-xxxx</h2>
        <OTPForm length={6} validOTP={validOTP} setShowResult={setShowResult} />
        {showResult && (
          <section className="result">
            {isValidOTP ? (
              <p className="success">Successful login</p>
            ) : (
              <p className="fail">Fail login</p>
            )}
          </section>
        )}
      </div>
    </div>
  );
}

export default App;
