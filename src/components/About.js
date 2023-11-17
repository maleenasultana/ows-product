import React from 'react'
import image1 from "../images/shampoo_3.png"
import image2 from "../images/One Wa Sender Product Mockup Without Shadow.png"
import "../css/style.css"
import "../css/bootstrap.min.css";


const About = () => {
  return (
    <div>
        <div class="container-fluid bg-primary hero-header mb-5">
        <div class="container text-center">
        <img  className="image11"src={image1} alt='' />
        </div>
        </div>
        <div className="container-fluid  py-5">
        <h1 className="display-4 text-white mb-3 animated slideInDown">About</h1>

        <div className="container-fluid py-5">
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                    <div className="feature-item position-relative bg-primary text-center p-3">
                        <div className="border py-5 px-3">
                            <i className="fa fa-leaf fa-3x text-dark mb-4"></i>
                            <h5 className="text-white mb-0">WHATSAPP AUTO RESPONDER BOT</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                    <div className="feature-item position-relative bg-primary text-center p-3">
                        <div className="border py-5 px-3">
                            <i className="fa fa-tint-slash fa-3x text-dark mb-4"></i>
                            <h5 className="text-white mb-0">WHATSAPP WARMER</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                    <div className="feature-item position-relative bg-primary text-center p-3">
                        <div className="border py-5 px-3">
                            <i className="fa fa-times fa-3x text-dark mb-4"></i>
                            <h5 className="text-white mb-0">GOOGLE MAP DATA EXTRACTOR</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <img className="img-fluid animated pulse infinite" src={image2} alt='...'/>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <h1 className="text-primary mb-4">OneWAsender <span className="fw-light text-dark">Is A Symbol Of
                            WhatsApp Marketing</span></h1>
                    <p className="mb-4">OneWAsender is the epitome of WhatsApp marketing, a powerful tool to supercharge your business's outreach and engagement. It's more than just a software; it's a symbol of success in the world of WhatsApp marketing, helping you connect with your audience, deliver your message, and achieve remarkable results.</p>
                    <p className="mb-4">Connect with your audience, engage them effectively, and watch your business grow. With our platform, success is just a message away.</p>
                    <a className="btn btn-primary py-2 px-4" href="#">Shop Now</a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About