import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import LOGO from '../assets/l2.png';
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <nav class="navbar bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src={LOGO} alt="DIETCARE" width="60" height="40"/>
    </a>
  </div>
</nav>
</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink className="mynav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="mynav-link" to="/dietplan">MyDietplan</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="mynav-link" to="/bmi">BMICalculator</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="mynav-link" to="/bmr">BMRCalculator</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="mynav-link" to="/sdfrr">About</NavLink>
        </li>
      </ul>
      <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label class="form-check-label me-2" for="flexSwitchCheckDefault">Dark Mode</label>
      </div>
      <div className="d-flex me-2">
              <button className="btn btn-outline-success me-2" type="button">Login</button>
        
         </div>
         </div>
         
  </div>

</nav>
  )
}
