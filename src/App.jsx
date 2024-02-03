import "./App.css";
import OTPForm from "./components/OtpForm";

function App() {
  const secretOTP = "123456";

  const validOTP = (otp) => {
    if (secretOTP === otp) {
      alert("Successful login!!!");
    } else {
      alert("Failed login :(");
    }
  };

  return (
    <div className="app">
      <div className="container">
        <header>
          <h1 className="shake">OTP COMPONENT</h1>
        </header>
        <h2 className="phone-number">Login with Phone Number: xxx-xxx-xxxx</h2>
        <OTPForm length={6} validOTP={validOTP} />
      </div>
    </div>
  );
}

export default App;
