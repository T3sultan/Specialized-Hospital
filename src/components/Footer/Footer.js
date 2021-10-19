import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        
        <div className="footer-container mt-5">
          <div className="container ">
            <div className="container2  ">

              <div className="col-md-6 ">
                <div className=" text-start">
                  <h5>Specialized Hospital</h5>
                  <div className="icons-container d-flex text-center mt-3">
                    <div className="icon rounded-circle">
                      <FontAwesomeIcon className="styleIcon rounded-circle" icon={faInstagramSquare} />
                    </div>
                    <div className="icon rounded-circle">
                      <FontAwesomeIcon icon={faTwitterSquare} />
                    </div>
                    <div className="icon rounded-circle">
                      <FontAwesomeIcon icon={faYoutube} />
                    </div>
                    <div className="icon rounded-circle">
                      <FontAwesomeIcon icon={faFacebookSquare} />
                    </div>
                  </div>
  
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="footer-menu-container">
                  <div>
                    <p className="footer-menu">Contact us</p>
                    
                  </div>
                  <p>phone Number: 017534555</p>
                  <span>email: tipusultancse@gmail.com</span>
                </div>
              </div>
             
             
  
            </div>
          </div>
        </div>
      
    );
};

export default Footer;