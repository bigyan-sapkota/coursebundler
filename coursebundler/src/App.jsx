import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Header from "./components/layout/header/header";
import Courses from "./components/courses/courses";
import Footer from "./components/layout/footer/footer";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import ForgetPassword from "./components/auth/forget-password";
import ResetPassword from "./components/auth/reset-password";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </Router>
  );
}
