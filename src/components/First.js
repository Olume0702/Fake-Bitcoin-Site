import React from "react";
import apple from "../assets/Icon awesome-apple.svg";
import google from "../assets/Group 53.svg";
import { Link } from "react-router-dom";

const First = () => {
  return (
    <div className="firstt">
      <div className="first">
        <div className="inner-data">
          <h4>
            Buy, sell and manage your <br />
            Crypto on TradExpress.
          </h4>
          <p>
            Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP <br />
            with NGN.
          </p>
        <Link to='Contact'>  <button id="btn3">Get Started</button> </Link>
          <div className="but">
            <button id="btn4">
              <img src={apple} alt="" id="apple" />
              <div className="ina">
                Download on the <br /> <span> App Store</span>{" "}
              </div>{" "}
            </button>
            <button id="btn5">
              <img src={google} alt="" id="google" />
              <div className="ina">
                Get on <br /> <span> Google Play </span>{" "}
              </div>{" "}
            </button>
          </div>
        </div>
      </div>
      </div>
    
  );
};

export default First;
