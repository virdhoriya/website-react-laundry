import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import * as Yup from "yup";
import useResetPassword from "../../hooks/otp/useResetPassword";

const ResetPassword = () => {
  const { resetPassword } = useResetPassword();
  const location = useLocation();
  const mobileNumber = location?.state?.mobile_number;
  const otp = location?.state?.otp;
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    newPassword: "",
    confPassword: "",
  });

  const handleCancelClick = async () => {
    navigate("/login");
  };

  const handleSubmit = async () => {
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});
      const result = await resetPassword(
        mobileNumber,
        otp,
        formData.confPassword
      );
      if (result.success) {
        navigate("/login");
      }
    } catch (error) {
      const validationErrors = {};
      error.inner.forEach((err) => {
        validationErrors[err.path] = err.message;
      });
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validationSchema = Yup.object().shape({
    newPassword: Yup.string()
      .matches(/[a-zA-Z]/, "Password must contain at least one letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .min(6, "Password must be 6 character long!")
      .required("new password is required!"),
    confPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Confirmation password is required"),
  });

  return (
    <section className="bg-white">
      <div className="h-[100vh] w-[100vw] flex justify-center items-center">
        <form className="reset-password-container flex flex-col gap-4">
          <h2 className="capitalize text-center text-3xl font-bold leading-9 tracking-tight text-gray-900 py-4">
            Reset Password
          </h2>

          <div className="flex flex-col gap-2">
            <label htmlFor="new_password">new password</label>
            <input
              id="new_password"
              type="password"
              name="newPassword"
              placeholder="new password"
              className="text-[1.4rem] block font-medium w-full rounded-md py-4 px-6 text-gray-900 shadow-sm placeholder:text-gray-400 leading-6 border-blue-300 border-[1.5px] focus:border-blue-600 focus:outline-none tracking-wide"
              value={formData.newPassword}
              onChange={handleChange}
            />
            {errors.newPassword ? (
              <span className="text-red-600 text-[1.2rem]">
                {errors.newPassword}
              </span>
            ) : (
              <span className="text-transparent text-[1.2rem]">&nbsp;</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="conf_password">confirm password</label>
            <input
              name="confPassword"
              id="conf_password"
              type="password"
              placeholder="confirm password"
              className="text-[1.4rem] block font-medium w-full rounded-md py-4 px-6 text-gray-900 shadow-sm placeholder:text-gray-400 leading-6 border-blue-300 border-[1.5px] focus:border-blue-600 focus:outline-none tracking-wide"
              value={formData.confPassword}
              onChange={handleChange}
            />
            {errors.confPassword ? (
              <span className="text-red-600 text-[1.2rem]">
                {errors.confPassword}
              </span>
            ) : (
              <span className="text-transparent text-[1.2rem]">&nbsp;</span>
            )}
          </div>

          <div className="flex justify-between items-center py-2">
            <button
              type="button"
              className="btn-sendotp btn-2 bg-[#e4e6eb]"
              onClick={handleCancelClick}
            >
              cancel
            </button>
            <button
              type="button"
              className="btn-sendotp btn-2 bg-[#6366F1] text-white"
              onClick={handleSubmit}
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;
