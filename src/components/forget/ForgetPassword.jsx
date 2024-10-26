import { useNavigate } from "react-router-dom";
import useGenerateOtp from "../../hooks/otp/useGenerateOtp";
import { useState } from "react";

const ForgetPassword = () => {
  const { generateOtp } = useGenerateOtp();
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState(null);

  const handleCancle = () => {
    navigate("/login");
  };

  const handleSendOtp = async () => {
    const result = await generateOtp(mobileNumber);
    if (result.success) {
      navigate("/enter-otp", { state: { mobileNumber } });
    }
  };

  return (
    <section className="bg-[#e9ebee]">
      <div className="h-[100vh] w-[100vw] flex justify-center items-center">
        <div className="enter-mobile-container">
          <h2>find your account</h2>
          <div className="py-8 px-[1.8rem] border-b-[0.5px] border-[#1c1e21] flex flex-col gap-8">
            <label htmlFor="mobile_number">
              Please enter your mobile number
            </label>
            <input
              required
              id="mobile_number"
              type="text"
              className="focus:outline-blue-400"
              placeholder="Enter mobile number"
              value={mobileNumber || ""}
              onChange={(e) => setMobileNumber(Number(e.target.value))}
            />
          </div>
          <div className="py-8 px-[1.8rem] flex  justify-end items-center gap-4">
            <button className="btn-sendotp bg-[#e4e6eb]" onClick={handleCancle}>
              cancel
            </button>
            <button
              className="btn-sendotp bg-primary text-white"
              onClick={handleSendOtp}
            >
              send otp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
