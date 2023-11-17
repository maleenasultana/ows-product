import React from 'react'
import Feature from './Feature'
import Product from './Product'
import image11 from "../images/shampoo_3.png"
import image1 from "../images/product-1.png"
import Footer from './Footer'
import NewsLetter from "./NewsLetter"
// import Contact from "./Contact"
import "../css/style.css"
import Testimonial from "./Testimonial"


const Hero = () => {
  return (
    <div>
         <div className="container-fluid bg-primary hero-header mb-5">
        <div className="container text-center w-100 h-50">
            <h3 className="display-4 text-white mb-3 animated slideInDown">Home</h3>
            <img  className="image11"src={image11} alt='' />
       
            {/* <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center mb-0 animated slideInDown">
                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                    <li className="breadcrumb-item text-white active" aria-current="page">Products</li>
                </ol>
            </nav> */}
        </div>
    </div>
    <Feature /><br/>
    <br/>
    <div className="container-fluid py-5">
    <div className="container">
        <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{"max-width": "600px"}}>
            <h1 className="text-primary mb-3"><span className="fw-light text-dark">Our</span> Marketing Product</h1>
            <p className="mb-5">Connect. Engage. Grow.</p>
        </div>
        <div className="row g-4">
            {/* <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                <div className="product-item text-center border h-100 p-3">
                    <img className="img-fluid mb-4" src={image1} alt="..."/>
                    <div className="mb-2">
                        <small className="fa fa-star text-primary"></small>
                        <small className="fa fa-star text-primary"></small>
                        <small className="fa fa-star text-primary"></small>
                        <small className="fa fa-star text-primary"></small>
                        <small className="fa fa-star text-primary"></small>
                        <small>(99)</small>
                    </div>
                    <a href="#" className="h6 d-inline-block mb-2">One WA Sender</a>
                    <h5 className="text-primary mb-3">₹999</h5>
                    <a href="#" className="btn btn-outline-primary px-3">Add To Cart</a>
                </div>
            </div> */}
            {/* <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                <div className="product-item text-center border h-100 p-4">
                    <img className="img-fluid mb-4" src={image1} alt="..."/>
                    <div className="mb-2">
                        <small className="fa fa-star text-primary"></small>
                        <small className="fa fa-star text-primary"></small>
                        <small className="fa fa-star text-primary"></small>
                        <small className="fa fa-star text-primary"></small>
                        <small className="fa fa-star text-primary"></small>
                        <small>(99)</small>
                    </div>
                    <a href="#" className="h6 d-inline-block mb-2">One WA Sender</a>
                    <h5 className="text-primary mb-3">₹999</h5>
                    <a href="#" className="btn btn-outline-primary px-3">Add To Cart</a>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                <div className="product-item text-center border h-100 p-4">
                    <img className="img-fluid mb-4" src={image1} alt="..."/>
                    <div className="mb-2">
                        <small className="fa fa-star text-primary"></small>
                        <small className="fa fa-star text-primary"></small>
                        <small className="fa fa-star text-primary"></small>
                        <small className="fa fa-star text-primary"></small>
                        <small className="fa fa-star text-primary"></small>
                        <small>(99)</small>
                    </div>
                    <a href="#" className="h6 d-inline-block mb-2">One WA Sender</a>
                    <h5 className="text-primary mb-3">₹999</h5>
                    <a href="#" className="btn btn-outline-primary px-3">Add To Cart</a>
                </div>
            </div> */}
            {/* <div className="col-5 wow fadeIn" data-wow-delay="0.7s">
                <div className="product-item text-center border h-100 p-4">
                    <img className="img-fluid  mb-4" src={image1} alt="..."/>
                   
                </div>
            </div> */}
            {/* <div className='col-4 mx-5 my-5' data-wow-delay="0.7s">
                   <div className="mb-2">
                        <small className="fa fa-star text-primary"></small>
                        <small className="fa fa-star text-primary"></small>
                        <small className="fa fa-star text-primary"></small>
                        <small className="fa fa-star text-primary"></small>
                        <small className="fa fa-star text-primary"></small>
                        <small>(99)</small>
                    </div>
                    <a href="#" className="h6 d-inline-block mb-2">One WA Sender</a>
                    <h5 className="text-primary mb-3">₹999</h5>
                    <a href="#" className="btn btn-outline-primary px-3">Add To Cart</a>
                   </div> */}
                   <div class="card bg-primary text-white">
  <img src={image11} class="card-img" alt="..."/>
  <div class="card-img-overlay">
    <h5 class="card-title">OneWASender</h5>
    <p class="card-text">A product that will benefit everyone.</p>
    {/* <p class="card-text">Last updated 3 mins ago</p> */}
  </div>
</div>
        </div>
    </div>
</div>
<div className="container-fluid py-5">
        <div className="container">
            <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{"max-width":"600px"}}>
                <h1 className="text-primary mb-3"><span className="fw-light text-dark">Best Benefits</span> Enhanced Outreach
                   </h1>
                <p className="mb-5"> OneWAsender enables businesses to reach a wider audience on WhatsApp, increasing the scope and impact of their marketing campaigns.</p>
            </div>
            <div className="row g-4 align-items-center">
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                    <div className="row g-5">
                        <div className="col-12 d-flex">
                            <div className="btn-square rounded-circle border flex-shrink-0"
                                style={{"width": "80px", "height": "80px"}}>
                                <i className="fa fa-check fa-2x text-primary"></i>
                            </div>
                            <div className="ps-3">
                                <h5>Improved Engagement</h5>
                                <hr className="w-25 bg-primary my-2"/>
                                <span> With its powerful features, OneWAsender facilitates more meaningful interactions with customers, fostering higher engagement levels and building stronger relationships.</span>
                            </div>
                        </div>
                        <div className="col-12 d-flex">
                            <div className="btn-square rounded-circle border flex-shrink-0"
                                style={{"width": "80px", "height": "80px"}}>
                                <i className="fa fa-check fa-2x text-primary"></i>
                            </div>
                            <div className="ps-3">
                                <h5>Efficient Message Delivery</h5>
                                <hr className="w-25 bg-primary my-2"/>
                                <span>The software streamlines the process of delivering messages, ensuring that the right content reaches the right audience at the right time, leading to better response rates.</span>
                            </div>
                        </div>
                        <div className="col-12 d-flex">
                            <div className="btn-square rounded-circle border flex-shrink-0"
                                style={{"width": "80px", "height": "80px"}}>
                                <i className="fa fa-check fa-2x text-primary"></i>
                            </div>
                            <div className="ps-3">
                                <h5>Time-Saving Automation</h5>
                                <hr className="w-25 bg-primary my-2"/>
                                <span>OneWAsender's automation features reduce the manual workload, allowing businesses to save time and resources while still maintaining effective and targeted communication with their audience.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                    <img className="img-fluid animated pulse infinite" src={image1}/>
                </div>
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                    <div className="row g-5">
                        <div className="col-12 d-flex">
                            <div className="btn-square rounded-circle border flex-shrink-0"
                                style={{"width": "80px", "height": "80px"}}>
                                <i className="fa fa-check fa-2x text-primary"></i>
                            </div>
                            <div className="ps-3">
                                <h5>Brand Visibility</h5>
                                <hr className="w-25 bg-primary my-2"/>
                                <span>Using OneWAsender can help businesses improve their brand visibility on WhatsApp, establishing a strong presence and enhancing their brand's reputation and recognition among their target audience</span>
                            </div>
                        </div>
                        <div className="col-12 d-flex">
                            <div className="btn-square rounded-circle border flex-shrink-0"
                                style={{"width": "80px", "height": "80px"}}>
                                <i className="fa fa-check fa-2x text-primary"></i>
                            </div>
                            <div className="ps-3">
                                <h5>Personalized Communication</h5>
                                <hr className="w-25 bg-primary my-2"/>
                                <span>OneWAsender enables businesses to personalize their communication with customers, leading to a more tailored and customer-centric approach that fosters loyalty and trust.</span>
                            </div>
                        </div>
                        <div className="col-12 d-flex">
                            <div className="btn-square rounded-circle border flex-shrink-0"
                                style={{"width": "80px", "height": "80px"}}>
                                <i className="fa fa-check fa-2x text-primary"></i>
                            </div>
                            <div className="ps-3">
                                <h5>Compliance and Security</h5>
                                <hr className="w-25 bg-primary my-2"/>
                                <span>OneWAsender ensures compliance with WhatsApp policies and regulations, offering a secure and reliable platform for businesses to carry out their marketing activities without any legal or security concerns</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid py-5">
        <div className="container">
            <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{"max-width": "600px"}}>
                <h1 className="text-primary mb-5"><span className="fw-light text-dark">If You Have Any Query,</span> Please Contact Us</h1></div>
            <div className="row g-5">
                <div className="col-lg-7 wow fadeIn" data-wow-delay="0.1s">
                    {/* <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p> */}
                    <div className="wow fadeIn" data-wow-delay="0.3s">
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                        <label for="subject">Subject</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Leave a message here" id="message" style={{"height": "150px"}}></textarea>
                                        <label for="message">Message</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-5 wow fadeIn" data-wow-delay="0.5s">
                    <iframe className="w-100 h-100"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234700.3465842475!2d77.24073175101016!3d23.199639111341018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1699376005916!5m2!1sen!2sin"
                    frameborder="0" style={{"min-height": "300px", "border":"0"}} allowfullscreen="" aria-hidden="false"
                    tabindex="0"></iframe>
                </div>
            </div>
        </div>
    </div>
 <Testimonial/>
<NewsLetter/>
<Footer/>
    </div>
  )
}

export default Hero