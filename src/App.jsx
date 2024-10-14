import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Prices from "./components/prices/Prices";
import CorporateServices from "./components/corporate_services/CorporateServices";
import More from "./components/more/More";
import Footer from "./components/footer/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Router>
      <Toaster />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/corporate-services" element={<CorporateServices />} />
          <Route path="/more" element={<More />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
