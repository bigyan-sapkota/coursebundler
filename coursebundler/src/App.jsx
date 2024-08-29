import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ForgetPassword from "./components/auth/forget-password";
import Register from "./components/auth/register";
import ResetPassword from "./components/auth/reset-password";
import Contact from "./components/contact/contact";
import Courses from "./components/courses/courses";
import Home from "./components/home/home";
import Footer from "./components/layout/footer/footer";
import Header from "./components/layout/header/header";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </Router>
  );
}
