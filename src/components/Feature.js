import React from "react";
import warmer from "../images/warmer.png";
import googledata from "../images/g-MAP.png";
import waSender from "../images/waSender.png";
import "../css/style.css";

const Feature = () => {
  return (
    <div>
     
      <div>
        <hr />
        <h3 className="text text-primary my-5 ">
          Innovation, Efficiency and Excellence .
        </h3>
        <hr />
      </div>

      <div className="row row-cols-1 row-cols-SM-2 mx-5 g-3">
        <div className="col-3 mx-4 wow fadeIn" data-wow-delay="0.3s">
          <div className="card bg-primary">
            <img
              src={warmer}
              className="card-img-top mx-5 w-50 h-50"
              alt="..."
            />
            <div className="card-body">
              <h6 className="card-title text-white">WHATSAPP WARMER</h6>
              {/* <p className="card-text text-white">A WhatsApp Warmer is a feature designed to enhance the deliverability and visibility of your messages on Whatsapp.</p> */}

              <div className="mb-2">
                <small className="fa fa-star text-light"></small>
                <small className="fa fa-star text-light"></small>
                <small className="fa fa-star text-light"></small>
                <small className="fa fa-star text-light"></small>
                <small className="fa fa-star text-light"></small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 mx-4">
          <div className="card bg-primary">
            <img
              src={googledata}
              className="card-img-top mx-5 w-50 h-50 "
              alt="..."
            />
            <div className="card-body">
              <h6 className="card-title text-white">
                GOOGLE MAP DATA EXTRACTOR
              </h6>
              {/* <p className="card-text text-white">A Google Map Data Extractor is a tool designed to collect information and data from Google Maps. </p> */}

              <div className="mb-2">
                <small className="fa fa-star text-light"></small>
                <small className="fa fa-star text-light"></small>
                <small className="fa fa-star text-light"></small>
                <small className="fa fa-star text-light"></small>
                <small className="fa fa-star text-light"></small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 mx-4">
          <div className="card bg-primary">
            <img
              src={waSender}
              className="waimg card-img-top mx-5 p-45% w-50 h-50"
              alt="..."
            />
            <div className="card-body">
              <h6 className="card-title text-white">ONE WASENDER</h6>
              {/* <p className="card-text text-white">A WhatsApp Warmer is a feature designed to enhance the deliverability and visibility of your messages on Whatsapp.</p> */}

              <div className="mb-2 ">
                <small className="fa fa-star text-light"></small>
                <small className="fa fa-star text-light"></small>
                <small className="fa fa-star text-light"></small>
                <small className="fa fa-star text-light"></small>
                <small className="fa fa-star text-light"></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
