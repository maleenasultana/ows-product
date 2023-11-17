import React from 'react'
import image1 from "../images/One Wa Sender Product Mockup Without Shadow.png"
const Deal = () => {
  return (
    <div>
         <div className="container-fluid deal bg-primary my-5 py-5">
        <div className="container py-5">
            <div className="row g-5 align-items-center">
                <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                    <img className="img-fluid animated pulse infinite" src={image1} alt='...'/>
                </div>
                <div className='col-lg-1'></div>
                <div className="col-lg-5 wow fadeIn" data-wow-delay="0.5s">
                    <div className="bg-white text-center p-4">
                        <div className="border p-4">
                            <p className="mb-2">One WA Sender</p>
                            <h2 className="fw-bold text-uppercase mb-4">Deals of the Day</h2>
                            <h1 className="display-4 text-primary mb-4">₹999</h1>
                            <h5>All in one Whatsapp Marketing Tool</h5>
                            <p className="mb-4">Unlock Today's Offer with WhatsApp Marketing!</p>
                            <div className="row g-0 cdt mb-4">
                                <div className="col-3">
                                    <h1 className="display-6" id="cdt-days">6</h1>
                                </div>
                                <div className="col-3">
                                    <h1 className="display-6" id="cdt-hours">12</h1>
                                </div>
                                <div className="col-3">
                                    <h1 className="display-6" id="cdt-minutes">55</h1>
                                </div>
                                <div className="col-3">
                                    <h1 className="display-6" id="cdt-seconds">05</h1>
                                </div>
                            </div>
                            <a className="btn btn-primary py-2 px-4" href="">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Deal