import React, { useState } from "react";
import Logo from "../images/OneWAsender 48x48.ico";

const Navbar = () => {
 
  return (
    <div>
      <div className="container-fluid sticky-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light p-0">
            <img className="mx-2" src={Logo} alt="" />
            <a href="index.html" className="navbar-brand">
              <h3 className="text-white">One WaSender</h3>
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
                <a href="/" className="nav-item nav-link">
                  Home
                </a>
                <a href="/about" className="nav-item nav-link">
                  About
                </a>
                {/* <a href="/products" className="nav-item nav-link">
                  Products
                </a> */}
                {/* <a href="/testimonial" className="nav-item nav-link">
                  Testimonials
                </a> */}
                {/* <a href="/contact" className="nav-item nav-link">
                  Contact
                </a> */}

                {/* <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu bg-light mt-2">
                                <a href="/features.js" className="dropdown-item">Features</a>
                                <a href="/howtouse" className="dropdown-item active">How To Use</a>
                                <a href="/testimonial" className="dropdown-item">Testimonial</a>
                                <a href="blog.html" className="dropdown-item">Blog Articles</a>
                                
                            </div>
                        </div> */}
              </div>
              <a href="/shopnow" className="btn btn-dark py-2 px-4 d-none d-lg-inline-block ">
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
