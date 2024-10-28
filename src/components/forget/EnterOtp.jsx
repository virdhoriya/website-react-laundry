import { useRef } from "react";
import useValidateOtp from "../../hooks/otp/useValidateOtp";
import { Link, useLocation, useNavigate } from "react-router-dom";

const EnterOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const mobile_number = location?.state?.mobileNumber;
  const last3 = String(mobile_number).slice(-3);
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
    <section className="bg-white">
      <div className="h-[100vh] w-[100vw] flex justify-center items-center">
        <div className="enter-mobile-container">
          <Link to="/forget-password" className="forget-link">
            forget password
          </Link>
          <p className="verify-text">Verify your phone number</p>
          <p className="verify-text2">We have send you an SMS with 6 digits</p>
          <div className="otp-boxes-container flex flex-col gap-6">
            <p className="text-[#9ca3af]">code sent to</p>
            <span className="font-bold text-center text-[var(--primary)]">
              +91 *****{last3}
            </span>
            <div className="boxes">
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  type="text"
                  className="box new-box text-[var(--primary)] focus:ring-2"
                  maxLength={1}
                  ref={(el) => (inputRefs.current[index] = el)}
                  onChange={(e) => handleInputChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              ))}
            </div>
          </div>

          <div>
            <button className="new-verift-button" onClick={handleVerify}>
              Verify
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterOtp;
