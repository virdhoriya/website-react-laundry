import { FiClock, FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const ContactUsForm = () => {
  return (
    <section className="section-space">
      <div className="secondary-container">
        <div className="flex justify-between">
          <div className="flex-[0_0_30%]">
            <h1 className="banner-title">
              Contact<br />Us
            </h1>
            <div className="mt-20 flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <FiPhoneCall className="block h-[2.2rem] w-[2.2rem]" />
                <p>9879400838</p>
                <span className="block">|</span>
                <p>9825600838</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="block">
                  <MdOutlineEmail className="block h-[2.4rem] w-[2.4rem]" />
                </span>
                <p>sikkacleaners@gmail.com</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="block">
                  <FiClock className="block h-[2.2rem] w-[2.2rem]" />
                </span>
                <p>Mon to Sat: 9.00am - 9.00pm, Sun: 9.00am - 12.00pm</p>
              </div>
            </div>
          </div>
          <div className="flex-[0_0_56.2%]">
            <div className="contact-form-container">
              <form className="contact-form">
                <div className="grid grid-cols-2 gap-24">
                  <input type="text" className="col-span-2" placeholder="Full Name"/>
                  <input type="email" placeholder="Email" />
                  <input type="tel" placeholder="Phone Number" />
                  <textarea rows={6} className="col-span-2" placeholder="Write Message"></textarea>
                  <button type="submit" className="btn justify-self-start">
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
