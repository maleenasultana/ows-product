import React from 'react'

const Footer = () => {
  return (
    <div><div className="container-fluid bg-white footer">
    <div className="container py-5">
        <div className="row g-5">
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                <a href="index.html" className="d-inline-block mb-3">
                    <h2 className="text-primary">OneWAsender</h2>
                </a>
                <p className="mb-0">India's Best Whatsapp Marketing & Google map Data Extractor Software |Connect. Engage. Grow.</p>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                <h5 className="mb-4">Get In Touch</h5>
                <p><i className="fa fa-map-marker-alt me-3"></i>One Code Works,45, Shri Ram Colony,Bhopal(M.P.)462047</p>
                <p><i className="fa fa-phone-alt me-3"></i>+918981818181</p>
                <p><i className="fa fa-envelope me-3"></i>info@OneWAsender.com</p>
                <div className="d-flex pt-2">
                    <a className="btn btn-square btn-outline-primary me-1" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square btn-outline-primary me-1" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square btn-outline-primary me-1" href="#"><i className="fab fa-instagram"></i></a>
                    <a className="btn btn-square btn-outline-primary me-1" href="#"><i
                            className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                <h5 className="mb-4">Our Products</h5>
                <a className="btn btn-link" href="">One WA Sender</a>
                <a className="btn btn-link" href="">Google Map Data Extractor</a>
                <a className="btn btn-link" href="">WhatsApp Warmer</a>
                <a className="btn btn-link" href="">WhatsApp API</a>
                <a className="btn btn-link" href="">WhatsApp CRM</a>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                <h5 className="mb-4">Popular Link</h5>
                <a className="btn btn-link" href="">About Us</a>
                <a className="btn btn-link" href="">Contact Us</a>
                <a className="btn btn-link" href="">Privacy Policy</a>
                <a className="btn btn-link" href="">Terms & Condition</a>
                <a className="btn btn-link" href="">Career</a>
            </div>
        </div>
    </div>
    <div className="container wow fadeIn" data-wow-delay="0.1s">
        <div className="copyright">
            <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a className="border-bottom" href="#">OneCodeWorks</a>, All Right Reserved.

                     {/* This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. */}
                     
                    Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                </div>
                <div className="col-md-6 text-center text-md-end">
                    <div className="footer-menu">
                        <a href="">Home</a>
                        <a href="">Cookies</a>
                        <a href="">Help</a>
                        <a href="">FAQs</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Footer