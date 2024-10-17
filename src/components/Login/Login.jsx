import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/login/useLogin";
import * as Yup from "yup";

const Login = () => {

  const { login } = useLogin();
  const [errors, setErrors] = useState({});
  const [formdata, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    const {name, value}= e.target;
    setFormData({
      ...formdata,
      [name]: value,
    })
  }

  const formValidation = Yup.object().shape({
    username: Yup.string()
    .min(10, 'Username must be at least 10 characters')
    .required('Username is required'),
    password: Yup.string()
    .min(6,'Password must be at least 6 characters')
    .required('Password is required'),
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await formValidation.validate(formdata, { abortEarly: false });
      await login(formdata.username, formdata.password);
      setErrors('');
    } catch(error) {
      const validationErrors = {};
      error.inner.forEach(error => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-20 w-auto"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className={`${errors.username || errors.password ? 'space-y-6' : 'space-y-10'}`}>
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
                className="text-xl block font-medium w-full rounded-md py-3 px-6 text-gray-900 shadow-sm placeholder:text-gray-400 leading-6 border-blue-300 border-[1.5px] focus:border-blue-600 focus:outline-none tracking-wide"
                value={formdata.username}
                onChange={handleChange}
              />
            </div>
            {errors.username && (
              <p className="pt-2 text-base font-medium text-red-500">{errors.username}</p>
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
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="password"
                className="text-xl block font-medium w-full rounded-md py-3 px-6 text-gray-900 shadow-sm placeholder:text-gray-400 leading-6 border-blue-300 border-[1.5px] focus:border-blue-600 focus:outline-none tracking-wide"
                value={formdata.password}
                onChange={handleChange}
              />
            </div>
            {errors.password && (
              <p className="pt-2 text-base font-medium text-red-500">{errors.password}</p>
            )}
          </div>

          <div>
            <button
              type="button"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-6 py-4 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={(e) => handleSubmit(e)}
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <Link
            to="/signup"
            className="ml-4 font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
