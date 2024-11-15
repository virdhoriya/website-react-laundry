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
    <section className="bg-white">
      <div className="h-[100vh] w-[100vw] flex justify-center items-center">
        <div className="forget-pass-container flex flex-col gap-14">
          <h2 className="text-center py-2 text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Find your account
          </h2>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="country"
                className="text-left text-[1.4rem] font-medium"
              >
                Country
              </label>
              <select
                name="country"
                id="country"
                className="text-[1.4rem] block font-medium w-full rounded-md py-4 px-6 text-gray-900 shadow-sm placeholder:text-gray-400 leading-6 border-blue-300 border-[1.5px] focus:border-blue-600 focus:outline-none tracking-wide"
              >
                <option value="india" className="text-[1.4rem] font-semibold">
                  india
                </option>
                <option value="usa" className="text-[1.4rem] font-semibold">
                  america
                </option>
              </select>
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="mobile_number"
                className="text-left text-[1.4rem] font-medium"
              >
                Please enter your mobile number
              </label>
              <input
                required
                id="mobile_number"
                type="text"
                className="text-[1.4rem] block font-medium w-full rounded-md py-4 px-6 text-gray-900 shadow-sm placeholder:text-gray-400 leading-6 border-blue-300 border-[1.5px] focus:border-blue-600 focus:outline-none tracking-wide"
                placeholder="Enter mobile number"
                value={mobileNumber || ""}
                onChange={(e) => setMobileNumber(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="flex justify-between items-center gap-8">
            <button
              className="btn-sendotp bg-[#e4e6eb] extra-pad"
              onClick={handleCancle}
            >
              cancel
            </button>
            <button
              className="btn-sendotp bg-indigo-600 text-white extra-pad"
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
