import { useState } from "react";
import toast from "react-hot-toast";
import { FiClock, FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    mobile_number: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const baseURL = import.meta.env.VITE_BASE_URL;
    try {
      setLoading(true);
      const response = await fetch(`${baseURL}/contact-us`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message || "Message sent successfully!", {
          className: "toast-success",
        });
        setFormData({
          full_name: "",
          email: "",
          mobile_number: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message!", {
          className: "toast-error",
        });
      }
    } catch {
      toast.error("Failed to send message!", {
        className: "toast-error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-padding">
      <div className="content-container">
        <div className="flex justify-between gap-12 tab-s:gap-8 tab:flex-col tab:gap-12">
          <div className="flex-[0_0_35%] laptop-l:flex-[0_0_40%] tab-l:flex-[0_0_40%]  tab-s:flex-[0_0_46%]">
            <h1 className="banner-heading">
              Contact
              <br />
              Us
            </h1>
            <div className="mt-20 flex flex-col gap-8 text-[1.8rem] text-[var(--grey)] font-medium laptop-l:mt-24 laptop-l:text-[1.6rem] laptop-md:gap-6 laptop-md:mt-16 laptop-md:text-[1.5rem] laptop-s:mt-12 laptop-s:text-[1.4rem] tab-l:mt-20 tab-s:mt-14 tab-s:gap-4 tab-s:text-[1.2rem] tab:mt-10">
              <div className="flex items-center gap-4 laptop-s:gap-3">
                <FiPhoneCall className="h-[2.4rem] w-[2.4rem] stroke-[var(--black)] laptop-l:h-[2.2rem] laptop-l:w-[2.2rem] laptop-md:h-[2rem] laptop-md:w-[2rem] laptop-s:h-[1.8rem] laptop-s:w-[1.8rem] tab-s:h-[1.6rem] tab-s:w-[1.6rem]" />
                <p>9879400838</p>
                <span className="block">|</span>
                <p>9825600838</p>
              </div>
              <div className="flex items-center gap-4 laptop-s:gap-3">
                <MdOutlineEmail className="h-[2.4rem] w-[2.4rem] fill-[var(--black)] laptop-l:h-[2.2rem] laptop-l:w-[2.2rem] laptop-md:h-[2rem] laptop-md:w-[2rem] tab-s:h-[1.6rem] tab-s:w-[1.6rem]" />
                <p>sikkacleaners@gmail.com</p>
              </div>
              <div className="flex items-center gap-4 laptop-s:gap-3">
                <FiClock className="h-[2.4rem] w-[2.4rem] stroke-[var(--black)] laptop-l:h-[2.2rem] laptop-l:w-[2.2rem] laptop-md:h-[2rem] laptop-md:w-[2rem] tab-s:self-start tab-s:my-[2px] tab-s:h-[1.6rem] tab-s:w-[1.6rem]" />
                <p>Mon to Sat: 9.00am - 9.00pm, Sun: 9.00am - 12.00pm</p>
              </div>
            </div>
          </div>

          <div className="flex-[0_0_56.2%] laptop-l:flex-[0_0_48%] tab-l:flex-[0_0_50%] tab-s:flex-grow">
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-y-24 gap-x-16 laptop-l:gap-y-20 laptop-l:gap-x-12 laptop-md:gap-y-14 laptop-md:gap-x-8 laptop-s:gap-y-12 laptop-s:gap-x-6 tab-l:grid-cols-1">
                  <input
                    type="text"
                    name="full_name"
                    aria-label="Full Name"
                    value={formData.full_name}
                    className="col-span-2 tab-l:col-span-1"
                    placeholder="Full Name"
                    onChange={handleInputChange}
                  />
                  <input
                    type="email"
                    name="email"
                    aria-label="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <input
                    type="tel"
                    name="mobile_number"
                    aria-label="Mobile Number"
                    placeholder="Mobile Number"
                    value={formData.mobile_number}
                    onChange={handleInputChange}
                  />
                  <textarea
                    rows={6}
                    name="message"
                    aria-label="Write Message"
                    className="col-span-2 tab-l:col-span-1"
                    placeholder="Write Message"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                  <button
                    type="submit"
                    aria-label="send message"
                    className={`send-btn justify-self-start ${
                      loading ? "send-btn-disabled" : ""
                    }`}
                    disabled={loading}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
