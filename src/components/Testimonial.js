import React from "react";
import image1 from "../images/shampoo_3.png"
import test1 from "../images/testimonial-1.jpg";
import test2 from "../images/testimonial-2.jpg";
import test3 from "../images/testimonial-3.jpg";

const Testimonial = () => {
  return (
    <div>
      {/* <div class="container-fluid bg-primary hero-header mb-5">
        <div class="container text-center">
          <h1 class="display-4 text-white mb-3 animated slideInDown">
            Testimonials
          </h1>
          <img  className="image11"src={image1} alt='' />
        </div>
      </div> */}
      <div className="container-fluid testimonial bg-primary my-5 py-5">
        <div className="container text-white py-5">
          <div
            className="mx-auto text-center wow fadeIn"
            data-wow-delay="0.1s"
            style={{ "max-width": "600px" }}
          >
            <h1 className="text-white mb-3">
              Our Customer Said{" "}
              <span className="fw-light text-dark">About Our OneWAsender</span>
            </h1>
            <p className="mb-5">
              OneWAsender is the epitome of WhatsApp marketing, a powerful tool
              to supercharge your business's outreach and engagement.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="owl-carousel testimonial-carousel wow fadeIn"
                data-wow-delay="0.1s"
              >
               
                <div className="testimonial-item text-center" data-dot="1">
                <h5 className="mb-1">Jennifer Elbert</h5>
                  <h6 className="fw-light text-white fst-italic mb-0">
                  Entrepreneur
                  </h6>
                  <img className="img-fluid1 border p-2 mb-2" src={test1} alt="" /><br/>
                  <h5 className="fw-light lh-base text-white">
                    OneWAsender has transformed our outreach strategy
                    completely. It's the backbone of our WhatsApp marketing
                    efforts, enabling us to reach our audience effectively and
                    drive impressive engagement. A must-have for any business
                    serious about success.<br/><br/>
                  </h5>
                  <h5 className="mb-1">Williams Smith</h5>
                  <h6 className="fw-light text-white fst-italic mb-0">
                    Business Men
                  </h6>
                </div>
                <div className="testimonial-item text-center" data-dot="2">
                  <img className="img-fluid1 border p-2 mb-2" src={test2} alt="" />
                  <h5 className="fw-light lh-base text-white">
                    I can't stress enough how much OneWAsender has elevated our
                    business. It's more than just software; it's a game-changer.
                    With its powerful capabilities, we've been able to connect
                    with our customers on a whole new level and witness
                    remarkable results in our outreach campaigns.<br/><br/>
                  </h5>
                  <h5 className="mb-1">Antonio</h5>
                  <h6 className="fw-light text-white fst-italic mb-0">
                  Business man
                  </h6>
                </div>
                <div className="testimonial-item text-center" data-dot="3">
                  <img className="img-fluid1 border p-2 mb-2" src={test3} alt="" />
                  <h5 className="fw-light lh-base text-white">
                    OneWAsender isn't just a tool; it's a symbol of our success
                    in the realm of WhatsApp marketing. It has revolutionized
                    the way we deliver messages and engage with our audience,
                    leading to significant improvements in our business metrics.
                    A crucial asset for any company striving to excel in the
                    digital landscape.<br/><br/>
                  </h5>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
