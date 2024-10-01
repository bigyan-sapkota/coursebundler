import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ForgetPassword from "./components/auth/forget-password";
import ResetPassword from "./components/auth/reset-password";
import ChangePassword from "./components/profile/change-password";
import UpdateProfile from "./components/profile/update-profile";

import Register from "./components/auth/register";
import Login from "./components/auth/login";

import Header from "./components/layout/header/header";
import Home from "./components/home/home";
import Contact from "./components/contact/contact";
import Courses from "./components/courses/courses";
import CoursePage from "./components/course-page/course-page";
import Request from "./components/request/request";
import About from "./components/about/about";
import Footer from "./components/layout/footer/footer";

import Subscribe from "./components/payments/subscribe";
import NotFound from "./components/not-found/not-found";
import PaymentSuccess from "./components/payments/payment-success";
import PaymentFail from "./components/payments/payment-fail";
import Profile from "./components/profile/profile";

export default function App() {
  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CoursePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request" element={<Request />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />

        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/paymentfail" element={<PaymentFail />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}
