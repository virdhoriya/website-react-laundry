import "./login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/login/useLogin";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/slices/userSlice";
import { setAuthStatus } from "../../redux/slices/authSlice";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Login = () => {
  const dispatch = useDispatch();
  const { login } = useLogin();
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const [formdata, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formdata,
      [name]: value,
    });
  };

  const formValidation = Yup.object().shape({
    username: Yup.string()
      .min(10, "Username must be at least 10 characters")
      .required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await formValidation.validate(formdata, { abortEarly: false });
      const result = await login(formdata.username, formdata.password);
      if (result) {
        dispatch(addUser(result.user));
        dispatch(setAuthStatus(!!result.token));
      }
      setErrors("");
    } catch (error) {
      const validationErrors = {};
      error.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
    }
  };

  return (
    <section className="h-[100vh] px-6 py-12">
      <div className="flex flex-col gap-8 justify-center items-center">
        <form className="login-form-container">
          <div className="flex flex-col justify-center items-center gap-10">
            <img
              src="sc-logo.png"
              alt="Sikka Cleaner Logo"
              loading="lazy"
              className="h-12 w-auto"
            />
            <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div
            className={`flex flex-col ${
              errors.username || errors.password ? "gap-6" : "gap-9"
            }`}
          >
            <div>
              <label
                htmlFor="username"
                className="block text-lg font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-4">
                <input
                  id="username"
                  name="username"
                  placeholder="email or mobile number"
                  className="text-xl block font-medium w-full rounded-md py-4 px-6 text-gray-900 shadow-sm placeholder:text-gray-400 leading-6 border-blue-300 border-[1.5px] focus:border-blue-600 focus:outline-none tracking-wide"
                  value={formdata.username}
                  onChange={handleChange}
                />
              </div>
              {errors.username && (
                <p className="pt-2 text-base font-medium text-red-500">
                  {errors.username}
                </p>
              )}
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-lg">
                  <Link
                    to="/forget-password"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="text-xl block font-medium w-full rounded-md py-4 px-6 pr-14 text-gray-900 shadow-sm placeholder:text-gray-400 leading-6 border-blue-300 border-[1.5px] focus:border-blue-600 focus:outline-none tracking-wide"
                  value={formdata.password}
                  onChange={handleChange}
                />
                <span
                  className="absolute inline-block top-1/2 right-4 -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <IoMdEyeOff className="h-8 w-8 fill-indigo-400" />
                  ) : (
                    <IoMdEye className="h-8 w-8 fill-indigo-400" />
                  )}
                </span>
              </div>
              {errors.password && (
                <p className="pt-2 text-base font-medium text-red-500">
                  {errors.password}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-6 py-4 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={(e) => handleSubmit(e)}
            >
              Login
            </button>
          </div>
          <p className="text-center text-lg text-gray-500">
            Not a member?
            <Link
              to="/signup"
              className="ml-4 font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
