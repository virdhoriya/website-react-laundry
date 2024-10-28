import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Signup from "./components/signup/Signup";
import Login from "./components/Login/Login";
import ForgetPassword from "./components/forget/ForgetPassword";
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
import EnterOtp from "./components/forget/EnterOtp";
import ResetPassword from "./components/forget/ResetPassword";
import Tmp from "./components/tmp/Tmp";

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
  const isForgetRoute = location.pathname === "/forget-password";
  const isEnterOtpRoute = location.pathname === "/enter-otp";
  const isResetPassRoute = location.pathname === "/reset-password";
  const tmp = location.pathname === "/tmp";
  return (
    <>
      {!isSignupRoute &&
        !isLoginRoute &&
        !isForgetRoute &&
        !isResetPassRoute &&
        !tmp &&
        !isEnterOtpRoute && <Header />}
      <main>
        <Routes>
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/enter-otp" element={<EnterOtp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Home />} />
          <Route path="/tmp" element={<Tmp />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/corporate-services" element={<CorporateServices />} />
          <Route path="/more" element={<More />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      {!isSignupRoute &&
        !isLoginRoute &&
        !isForgetRoute &&
        !isResetPassRoute &&
        !isForgetRoute &&
        !tmp &&
        !isEnterOtpRoute && <Footer />}
    </>
  );
};

export default App;
