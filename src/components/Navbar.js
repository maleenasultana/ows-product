import React, { useState } from "react";
import Logo from "../images/OneWAsender 48x48.ico";
import "../css/style.css"
import "./Navbar.css"

const Navbar = () => {
 
  return (
    <div>
      <div className="container-fluid sticky-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light p-0">
            <img className="my-5 mx-2" src={Logo} alt="..." />
            <a href="/" className="navbar-brand">
              <h3 className="text text-white my-1">One WaSender</h3>
            </a>
            <button
              type="button"
              className="navbar-toggler ms-auto me-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto">
                <a href="/" className="item text-white nav-item nav-link">
                  Home
                </a>
                <a href="/about" className="item text-white nav-item nav-link">
                  About
                </a>
               
              </div>
              <a href="https://rzp.io/l/onewasender" className="btn btn-primary  mx-5 py-2 px-4 d-none d-lg-inline-block ">
                 ShopNow
                </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
