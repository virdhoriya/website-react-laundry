import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Prices from "./components/prices/Prices";
import CorporateServices from "./components/corporate_services/CorporateServices";
import More from "./components/more/More";
import Cart from "./components/cart/Cart";
import Footer from "./components/footer/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Router>
      <Toaster />
      <MainComponent />
    </Router>
  );
};

const MainComponent = () => {
  const location = useLocation();
  const isLoginRoute = location.pathname === "/login";
  const isSignupRoute = location.pathname === "/signup";
  return (
    <>
      {!isSignupRoute && !isLoginRoute && <Header />}
      <main>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/corporate-services" element={<CorporateServices />} />
          <Route path="/more" element={<More />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      {!isSignupRoute && !isLoginRoute && <Footer />}
    </>
  );
};

export default App;
