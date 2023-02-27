import React from "react";
import "../style/Footer.css";
import logo from "../assets/Group 79.svg";


const Footer = () => {
  return (
    <div className="footer">
      <div className="foot">
        <h6>Products</h6>
        <p>
          Bitcoin <br /> Alt <br /> Flat <br /> Refil <br /> P2P
        </p>
      </div>

      <div className="foot">
        <h6>Learn</h6>
        <p>
          Help center <br /> Blog
        </p>
      </div>

      <div className="foot">
        <h6>Contacts</h6>
        <p>
          hello@tradeexpress.com <br /> <br /> support@tradeexpress.com
        </p>
        <img src={logo} alt="" />
      </div>

      <div className="foot">
        <h6>Company</h6>
        <p>
          About Us <br /> Careers <br /> Rates <br /> Mobile
        </p>
      </div>

      <div className="foot">
        <h6>Legal</h6>
        <p>
          Privacy Policy <br />
          Laundering <br />
          Terms and Conditions
        </p>
      </div>

     
    </div>
  );
};

export default Footer;
