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
import Order from "./components/order/Order";
import DashBoard from "./components/dashboard/DashBoard";
import Profile from "./components/dashboard/Profile";
import DashBoardHome from "./components/dashboard/Home";
import PriceListView from "./components/dashboard/PriceListView";
import WriteReview from "./components/dashboard/WriteReview";
import SavedAddress from "./components/dashboard/SavedAddress";
import ViewOrder from "./components/dashboard/ViewOrder";
import ProtectedRoute from "./components/protected/ProtectedRoute";
import PublicRoute from "./components/protected/PublicRoute";
import NotFound from "./components/NotFound";

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

  const excludeHeaderFooterRoutes = [
    "/login",
    "/signup",
    "/forget-password",
    "/enter-otp",
    "/reset-password",
    "/dashboard",
  ];

  const isExcludedRoute =
    excludeHeaderFooterRoutes.includes(location.pathname) ||
    location.pathname.startsWith("/dashboard");

  const isAuthenticated = Boolean(localStorage.getItem("token"));

  return (
    <>
      {!isExcludedRoute && <Header />}
      <main>
        <Routes>
          <Route
            path="/forget-password"
            element={
              <PublicRoute isAuthenticated={isAuthenticated}>
                <ForgetPassword />
              </PublicRoute>
            }
          />
          <Route
            path="/enter-otp"
            element={
              <PublicRoute isAuthenticated={isAuthenticated}>
                <EnterOtp />
              </PublicRoute>
            }
          />
          <Route
            path="/reset-password"
            element={
              <PublicRoute isAuthenticated={isAuthenticated}>
                <ResetPassword />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute isAuthenticated={isAuthenticated}>
                <Signup />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute isAuthenticated={isAuthenticated}>
                <Login />
              </PublicRoute>
            }
          />

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/corporate-services" element={<CorporateServices />} />
          <Route path="/more" element={<More />} />
          <Route
            path="/services"
            element={<Services isAuthenticated={isAuthenticated} />}
          />
          <Route path="/order" element={<Order />} />

          <Route
            path="/cart"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Cart />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <DashBoard />
              </ProtectedRoute>
            }
          >
            <Route path="home" element={<DashBoardHome />} />
            <Route path="profile" element={<Profile />} />
            <Route path="price-list" element={<PriceListView />} />
            <Route path="write-review" element={<WriteReview />} />
            <Route path="saved-addresses" element={<SavedAddress />} />
            <Route path="view-order" element={<ViewOrder />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      {!isExcludedRoute && <Footer />}
    </>
  );
};

export default App;
