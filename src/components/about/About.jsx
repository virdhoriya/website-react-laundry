import Banner from "./Banner";
// import StatsDisplay from "./StatsDisplay";
import Details from "./Details";
import Video from "./Video";
import History from "./History";
import "./about.css";

const About = () => {
  return (
    <div>
      <Banner />
      {/* <StatsDisplay /> */}
      <Details />
      <Video />
      <History />
    </div>
  );
};

export default About;
