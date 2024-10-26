import { useRef } from "react";
import { SlLock } from "react-icons/sl";
import useValidateOtp from "../../hooks/otp/useValidateOtp";
import { useLocation, useNavigate } from "react-router-dom";

const EnterOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const mobile_number = location?.state?.mobileNumber;
  const { validateOtp } = useValidateOtp();
  const inputRefs = useRef([]);

  const handleInputChange = (e, index) => {
    if (e.target.value.length > 1) {
      e.target.value = e.target.value[0];
    }

    if (e.target.value !== "" && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && e.target.value === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = async () => {
    const otp = inputRefs.current.map((input) => input.value).join("");
    const result = await validateOtp(otp, mobile_number);

    if (result.success) {
      navigate("/reset-password", { state: { mobile_number, otp } });
    }
  };

  return (
    <section className="bg-[#e9ebee]">
      <div className="h-[100vh] w-[100vw] flex justify-center items-center shadow">
        <div className="enter-otp-container">
          <SlLock className="lock-icon" />
          <h2>Enter your otp</h2>
          <div className="boxes">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="text"
                className="box"
                maxLength={1}
                ref={(el) => (inputRefs.current[index] = el)}
                onChange={(e) => handleInputChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>
          <button className="verify-btn bg-indigo-500" onClick={handleVerify}>
            Verify
          </button>
        </div>
      </div>
    </section>
  );
};

export default EnterOtp;
