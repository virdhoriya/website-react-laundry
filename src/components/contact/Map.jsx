import { FiPhoneCall } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";

const Map = () => {
  return (
    <section className="section-padding">
      <div className="content-container">
        <div className="flex items-center justify-between">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71892.85888552133!2d72.52876078262105!3d23.012447965659952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e1!3m2!1sen!2sin!4v1727931836534!5m2!1sen!2sin"
              width="980"
              height="870"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-3xl"
            ></iframe>
          </div>

          <div className="flex-[0_0_31%]">
            <div className="flex flex-col gap-36">
              <div className="flex flex-col gap-12">
                <div className="flex items-center gap-8">
                  <SlLocationPin className="h-12 w-12 fill-[var(--secondary)]" />
                  <h4 className="text-[2.6rem] leading-[2.6rem] font-bold">
                    Memnagar Branch
                  </h4>
                </div>
                <p className="text-[1.8rem] leading-[3rem] font-medium">
                  57, Kamal Society, Opp.Jain Derasar, B/S Tarun Nagar-3,
                  Nr.Subhash Chowk, Memnagar, Ahmedabad - 380052, Gujarat, India
                </p>
                <div className="flex items-center gap-4 font-medium">
                  <FiPhoneCall className="h-[2.4rem] w-[2.4rem]" />
                  <p>+91-9712926934</p>
                  <span>|</span>
                  <p>079-27414934</p>
                </div>
              </div>

              <div className="flex flex-col gap-12">
                <div className="flex items-center gap-8">
                  <SlLocationPin className="h-12 w-12 fill-[var(--secondary)]" />
                  <h4 className="text-[2.6rem] leading-[2.6rem] font-bold">
                    Naranpura Branch
                  </h4>
                </div>
                <p className="text-[1.8rem] leading-[3rem] font-medium">
                  Shop No: B/12, Arjun Elegance, Opp. Bhaghirath Soc. & S.P.
                  Ladies Hostel, Divyapath School, Memnagar Road, Naranpura,
                  Ahmedabad - 380051, Gujarat, India.
                </p>
                <div className="flex items-center gap-4 font-medium">
                  <FiPhoneCall className="h-[2.2rem] w-[2.2rem]" />
                  <p>+91-9409420403</p>
                </div>
              </div>

              <div className="flex flex-col gap-12">
                <div className="flex items-center gap-8">
                  <SlLocationPin className="h-12 w-12 fill-[var(--secondary)]" />
                  <h4 className="text-[2.6rem] leading-[2.6rem] font-bold">
                    Workshop
                  </h4>
                </div>
                <p className="text-[1.8rem] leading-[3rem] font-medium">
                  Shop No: 5B, ajanta sheds, in shrijee estate, B/H,
                  bharataluminum, near. IRIS Automation, nr, santej - vadsar
                  road canal, santej, ghandhinagar, Gujarat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
