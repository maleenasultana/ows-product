import React from 'react'

const HowToUse = () => {
  return (
    <div>
        <div className="container-fluid how-to-use bg-primary my-5 py-5">
        <div className="container text-white py-5">
            <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{"max-width": "600px"}}>
                <h1 className="text-white mb-3"><span className="fw-light text-dark">Top 3 Reasons to Buy </span> OneWaSender
                    <span className="fw-light text-dark">WhatsApp Marketing Tool</span></h1>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
            </div>
            <div className="row g-5">
                <div className="col-lg-4 text-center wow fadeIn" data-wow-delay="0.1s">
                    <div className="btn-square rounded-circle border mx-auto mb-4" style={{"width": "120px", "height": "120px"}}>
                        <i className="fa- fa-users fa-3x text-dark"></i>
                    </div>
                    <h5 className="text-white">Multiple WhatsApp Login</h5>
                    <hr className="w-25 bg-light my-2 mx-auto"/>
                    <span>Add Multiple Numbers in one place and chat to all whatsapp Numberson one platform</span>
                </div>
                <div className="col-lg-4 text-center wow fadeIn" data-wow-delay="0.3s">
                    <div className="btn-square rounded-circle border mx-auto mb-4" style={{"width": "120px", "height": "120px"}}>
                        <i className="fa fa-home fa-3x text-dark"></i>
                    </div>
                    <h5 className="text-white">Numbers Rotation</h5>
                    <hr className="w-25 bg-light my-2 mx-auto"/>
                    <span>Numbers Rotation feature is one of the best feature you can use it to reduce blocking of your WhatsApp numbers</span>
                </div>
                <div className="col-lg-4 text-center wow fadeIn" data-wow-delay="0.5s">
                    <div className="btn-square rounded-circle border mx-auto mb-4" style={{"width": "120px", "height": "120px"}}>
                        <i className="fa fa-home fa-3x text-dark"></i>
                    </div>
                    <h5 className="text-white">WhatsApp Warmer</h5>
                    <hr className="w-25 bg-light my-2 mx-auto"/>
                    <span>Warmup your Fresh Whatsapp Numbers And reduce blocking issue of your WhatsApp Numbers</span>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default HowToUse