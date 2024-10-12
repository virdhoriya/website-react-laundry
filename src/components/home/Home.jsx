import Cuopon from "./Cuopon";
import Services from "./Services";
import WelcomeTo from "./WelcomeTo";
import Steps from "./Steps";
import ChooseUs from "./ChooseUs";
import Benefits from "./Benefits";
import Testimonials from "./Testimonials";
import Download from "./Download";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Cuopon />
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
