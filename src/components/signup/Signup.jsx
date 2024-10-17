import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import useSignup from "../../hooks/signup/useSignup";

const Signup = () => {
  const { signup, generateOtp } = useSignup();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formData.first_name.trim() || !formData.last_name.trim() || !formData.mobile_number.trim() || !formData.password.trim() || !formData.gender.trim() || !formData.role_id.trim() || !formData.email.trim()) {
        toast.error("Please fill in all fields")
    } else {
        signup(formData);
    }
  }

  const sendOtp = () => {
    if(!formData.mobile_number) {
      toast.error("Please enter mobile number to generate otp",{
        style: {
            maxWidth: '400px',
        }
      });
    }
    else {
      const mobile = formData.mobile_number;
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
        <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <label htmlFor="first_name" className="block text-lg font-medium leading-6 text-gray-900" >
              Firstname
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="text-xl block font-medium w-full rounded-md py-3 px-6 text-gray-900 shadow-sm placeholder:text-gray-400 leading-6 border-blue-300 border-[1.5px] focus:border-blue-600 focus:outline-none tracking-wide"
            />
          </div>

          <div className="flex flex-col gap-4">
            <label htmlFor="last_name" className="block text-lg font-medium leading-6 text-gray-900" >
              Lastname
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="text-xl block font-medium w-full rounded-md py-3 px-6 text-gray-900 shadow-sm placeholder:text-gray-400 leading-6 border-blue-300 border-[1.5px] focus:border-blue-600 focus:outline-none tracking-wide"
            />
          </div>

          <div className="flex flex-col gap-4">
            <label htmlFor="mobile" className="block text-lg font-medium leading-6 text-gray-900" >
              Mobile Number
            </label>
            <div className="relative">
              <input
                type="text"
                id="mobile"
                name="mobile_number"
                value={formData.mobile_number}
                onChange={handleChange}
                className="text-xl block font-medium w-full rounded-md py-3 px-6 text-gray-900 shadow-sm placeholder:text-gray-400 leading-6 border-blue-300 border-[1.5px] focus:border-blue-600 focus:outline-none tracking-wide"
              >
              </input>
              <button type="button" className="text-xl inline-block absolute top-0 right-0 h-full px-4 border border-blue-300 rounded-r-md" onClick={sendOtp}>send</button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <label htmlFor="password" className="block text-lg font-medium leading-6 text-gray-900" >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="text-xl block font-medium w-full rounded-md py-3 px-6 text-gray-900 shadow-sm placeholder:text-gray-400 leading-6 border-blue-300 border-[1.5px] focus:border-blue-600 focus:outline-none tracking-wide"
            />
          </div>

          <div className="flex flex-col gap-4 self-start">
            <label className="block text-lg font-medium leading-6 text-gray-900" >
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
          </div>

          <div className="flex flex-col gap-4">
            <label htmlFor="email" className="block text-lg font-medium leading-6 text-gray-900" >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="text-xl block font-medium w-full rounded-md py-3 px-6 text-gray-900 shadow-sm placeholder:text-gray-400 leading-6 border-blue-300 border-[1.5px] focus:border-blue-600 focus:outline-none tracking-wide"
              />
          </div>

          <div className="flex flex-col gap-4">
            <label htmlFor="otp" className="block text-lg font-medium leading-6 text-gray-900" >
              Otp
            </label>
            <input
              type="text"
              id="otp"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              className="text-xl block font-medium w-full rounded-md py-3 px-6 text-gray-900 shadow-sm placeholder:text-gray-400 leading-6 border-blue-300 border-[1.5px] focus:border-blue-600 focus:outline-none tracking-wide"
            />
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
