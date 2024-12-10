import "./home.css";
import Banner from "./Banner";
import Coupon from "./Coupon";
import Services from "./Services";
import WelcomeTo from "./WelcomeTo";
import Steps from "./Steps";
import ChooseUs from "./ChooseUs";
import Benefits from "./Benefits";
import Testimonials from "./Testimonials";
import Download from "./Download";

const Home = () => {
  return (
    <div>
      <Banner />
      <Coupon />
      <Services />
      <WelcomeTo />
      <Steps />
      <ChooseUs />
      <Benefits />
      <Testimonials />
      <Download />
    </div>
  );
};

export default Home;
