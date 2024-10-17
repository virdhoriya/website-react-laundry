import { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import useSignup from "../../hooks/signup/useSignup";

const Signup = () => {
  const { signup, generateOtp } = useSignup();
  const [mvalidation, setMvalidation] = useState('');
  const [errors, setErrors] = useState({});
  const [isError, setIsError] = useState(false);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    mobile_number: '',
    password: '',
    gender: '',
    role_id: '5',
    email: '',
    otp: ''
  });

  const handleChange = (e) => {
    const {name, value} =e.target;
    setFormData({
        ...formData,
        [name]: value,
    })
  }

  const signUpSchema = Yup.object().shape({
    first_name: Yup.string().required('first name is required'),
    last_name: Yup.string().required('lastname is required'),
    mobile_number: Yup.string().matches(/^[0-9]{10}$/, "Mobile number must be 10 digits").required("Mobile number is required"),
    gender: Yup.string().required('Please select you gender'),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    otp: Yup.string().matches(/^\d{6}$/, "OTP must be exactly 6 digits").required("OTP is required"),
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUpSchema.validate(formData ,{ abortEarly: false});
      signup(formData);
      setErrors('');

    } catch(error) {
      setIsError(true);
      const validationErrors = {};
      error.inner.forEach(error => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
    }
  }

  const sendOtp = () => {
    const mobile = formData.mobile_number;
    const isValid = /^[0-9]{10}$/.test(mobile);
    if (!mobile) {
      setMvalidation('Mobile number is required');
    } else if (!isValid) {
      setMvalidation('Mobile number must be 10 digits');
    } else {
      setMvalidation('');
      generateOtp(mobile);
    }
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

      <div className="mx-auto w-full max-w-xl">
        <img className="mx-auto h-20 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="sikka-cleaners" />
        <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
          Create an account
        </h2>
      </div>

      <div className="mt-14 mx-auto w-full max-w-xl">
        <form className={`flex flex-col ${isError ? 'gap-8' : 'gap-12'}`} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="first_name" className="mb-4 block text-lg font-medium leading-6 text-gray-900" >
              Firstname
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="firstname"
              value={formData.first_name}
              onChange={handleChange}
              className="text-xl block font-medium w-full rounded-md py-3 px-6 text-gray-900 shadow-sm placeholder:text-gray-400 leading-6 border-blue-300 border-[1.5px] focus:border-blue-600 focus:outline-none tracking-wide"
            />
            {errors.first_name && (
              <p className="pt-2 text-base font-medium text-red-500">{errors.first_name}</p>
            )}
          </div>

          <div>
            <label htmlFor="last_name" className="mb-4 block text-lg font-medium leading-6 text-gray-900" >
              Lastname
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder="lastname"
              value={formData.last_name}
              onChange={handleChange}
              className="text-xl block font-medium w-full rounded-md py-3 px-6 text-gray-900 shadow-sm placeholder:text-gray-400 leading-6 border-blue-300 border-[1.5px] focus:border-blue-600 focus:outline-none tracking-wide"
            />
            {errors.last_name && (
              <p className="pt-2 text-base font-medium text-red-500">{errors.last_name}</p>
            )}
          </div>

          <div>
            <label htmlFor="mobile" className="block text-lg font-medium leading-6 text-gray-900 mb-4" >
              Mobile Number
            </label>
            <div className="relative">
              <input
                type="text"
                id="mobile"
                name="mobile_number"
                placeholder="70460XXXXX"
                value={formData.mobile_number}
                onChange={handleChange}
                className="text-xl block font-medium w-full rounded-md py-3 px-6 text-gray-900 shadow-sm placeholder:text-gray-400 leading-6 border-blue-300 border-[1.5px] focus:border-blue-600 focus:outline-none tracking-wide"
              >
              </input>
              <button type="button" className=" bg-blue-100 text-xl inline-block absolute top-0 right-0 h-full px-4 border border-blue-300 rounded-r-md" onClick={sendOtp}>send</button>
            </div>
            {
              mvalidation && (
              <p className="pt-2 text-base font-medium text-red-500">{mvalidation}</p>
              ) ||
              errors.mobile_number && (
              <p className="pt-2 text-base font-medium text-red-500">{errors.mobile_number}</p>
              )
            }
          </div>

          <div>
            <label htmlFor="password" className="mb-4 block text-lg font-medium leading-6 text-gray-900" >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
              className="text-xl block font-medium w-full rounded-md py-3 px-6 text-gray-900 shadow-sm placeholder:text-gray-400 leading-6 border-blue-300 border-[1.5px] focus:border-blue-600 focus:outline-none tracking-wide"
            />
            {errors.password && (<p className="pt-2 text-base font-medium text-red-500">{errors.password}</p>)}
          </div>

          <div>
            <label className="mb-4 block text-lg font-medium leading-6 text-gray-900" >
              Gender
            </label>
            <div className="flex items-center gap-4">
                <input type="radio" name="gender" id="male" value="1" onChange={handleChange} className="appearance-none h-6 w-6 border-2 border-blue-600 rounded-full checked:bg-blue-600 checked:border-transparent focus:outline-none checked:ring-2 checked:ring-blue-500 checked:ring-offset-2"/>
                <label htmlFor="male" className="block text-lg font-medium leading-6 text-gray-900">Male</label>
                <input type="radio" name="gender" id="female" value="2" onChange={handleChange} className="appearance-none h-6 w-6 border-2 border-blue-600 rounded-full checked:bg-blue-600 checked:border-transparent focus:outline-none checked:ring-2 checked:ring-blue-500 checked:ring-offset-2"/>
                <label htmlFor="female" className="block text-lg font-medium leading-6 text-gray-900">Female</label>
                <input type="radio" name="gender" id="others" value="3" onChange={handleChange} className="appearance-none h-6 w-6 border-2 border-blue-600 rounded-full checked:bg-blue-600 checked:border-transparent focus:outline-none checked:ring-2 checked:ring-blue-500 checked:ring-offset-2"/>
                <label htmlFor="others" className="block text-lg font-medium leading-6 text-gray-900">Other</label>
            </div>
            {errors.gender && (<p className="pt-2 text-base font-medium text-red-500">{errors.gender}</p>)}
          </div>

          <div>
            <label htmlFor="email" className="mb-4 block text-lg font-medium leading-6 text-gray-900" >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="user@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="text-xl block font-medium w-full rounded-md py-3 px-6 text-gray-900 shadow-sm placeholder:text-gray-400 leading-6 border-blue-300 border-[1.5px] focus:border-blue-600 focus:outline-none tracking-wide"
              />
              {errors.email && (<p className="pt-2 text-base font-medium text-red-500">{errors.email}</p>)}
          </div>

          <div>
            <label htmlFor="otp" className="mb-4 block text-lg font-medium leading-6 text-gray-900" >
              Otp
            </label>
            <input
              type="text"
              id="otp"
              name="otp"
              placeholder="otp"
              value={formData.otp}
              onChange={handleChange}
              className="text-xl block font-medium w-full rounded-md py-3 px-6 text-gray-900 shadow-sm placeholder:text-gray-400 leading-6 border-blue-300 border-[1.5px] focus:border-blue-600 focus:outline-none tracking-wide"
            />
            {errors.otp && (<p className="pt-2 text-base font-medium text-red-500">{errors.otp}</p>)}
          </div>

          <button 
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-6 py-4 text-xl font-bold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            SignUp
          </button>
        </form>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Signup;
