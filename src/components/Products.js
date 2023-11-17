import React from 'react'
import image1 from "../images/shampoo_3.png"


const Products = () => {
  return (
    <div>
         <div class="container-fluid bg-primary hero-header mb-5">
        <div class="container text-center">
            {/* <h1 class="display-4 text-white mb-3 animated slideInDown">Products</h1> */}
            <img  className="image11"src={image1} alt='' />
        </div>
        </div>
       <div className="container-fluid py-5">
        <div className="container">
            <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{"max-width": "600px"}}>
                <h1 className="text-primary mb-3"><span className="fw-light text-dark">Our All</span> Marketing Products</h1>
                <p className="mb-5">Connect. Engage. Grow.</p>
            </div>
            <div className="row g-4">
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
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
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
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
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
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
            </div>
        </div>
    </div>
    </div>
  )
}

export default Products