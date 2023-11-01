import React from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import LOGO from "../assets/l2.png";

function Navbar() {
  const authToken = localStorage.getItem("authToken");
  return (
    <div className="navbar-main">
      <div className="d-flex gap-5 align-items-center">
        <Link to={"/"}>
          <img src={LOGO} alt="logo" height={50} />
        </Link>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/dietplan">MyDietplan</NavLink>

          <NavLink to="/bmi">BMICalculator</NavLink>

          <NavLink to="/bmr">BMRCalculator</NavLink>
          <NavLink to="/bodyfat">BodyFatCalculator</NavLink>

          <NavLink to="/about">About</NavLink>
        </div>
        <div></div>
      </div>
      <div>
{authToken ? (
            <Link to="/profile">
              <button className="btn btn-outline-success me-2" type="button">
                Profile
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="btn btn-outline-success me-2" type="button">
                Login
              </button>
            </Link>
          )}
      </div>
    </div>
  );
}

export default Navbar;
