import "./App.css";
import Navbar from "./components/Navbar";
import Bmi from "./pages/Bmi";
import Bmr from "./pages/Bmr";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Dietplan from "./pages/Dietplan";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import Profile from "./pages/Profile";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const allowedUrls = ["/", "/login","/signup"];

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("authToken");
    if (!isLoggedIn && !allowedUrls.includes(location.pathname)) {
      navigate("/login");
      toast.error("please login first")
    }
  }, [location, navigate]);

  return (
    <div>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmi" element={<Bmi />} />
        <Route path="/dietplan" element={<Dietplan />} />
        <Route path="/bmr" element={<Bmr />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
