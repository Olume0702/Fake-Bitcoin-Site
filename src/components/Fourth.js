import React from "react";
import "../style/Fourth.css";
import box from "../assets/Union 1.svg";
import hyphen from "../assets/Group 8699.svg";
import Jona from '../assets/Jonathan.jpeg'
import Tayo from '../assets/Tayo.jpeg'
import Tunde from '../assets/Tunde.jpeg'

const Fourth = () => {
  return (
    <div className="forth">
      <h3>Customer's Review</h3>
      <div className="dif">
        <div className="we">
          <img src={box} alt="" className="box" />
          <img src={hyphen} alt="" className="hyph" />
          <p>
            Trading on TradExpress mobile & web <br /> platforms has been a
            smooth <br />
            experience for me quite easy to navigate.
          </p>
          <div className="clienta"><img src={Jona} alt="" srcset="" /> <div className="client"><h5>Jonathan</h5><h6>Bayelsa</h6>  </div> </div>
        </div>

        <div className="wee">
          <img src={box} alt="" className="box" />
          <img src={hyphen} alt="" className="hyph" />
          <p>
            They have the best rate compared <br />
            to other platforms with fast payout.
          </p>
          <div className="clienta"><img src={Tayo} alt="" srcset="" /> <div className="client"><h5>Tayo</h5><h6>Ogun</h6>  </div> </div>
        </div>

        <div className="weee">
          <img src={box} alt="" className="box" />
          <img src={hyphen} alt="" className="hyph" />
          <p>
            Easy to fund and withdraw coins <br />
            or cash on their platform, I will definitely trade with them again.
          </p>
          <div className="clienta"><img src={Tunde} alt="" srcset="" /> <div className="client"><h5>Tunde</h5><h6>Oyo</h6>  </div> </div>
        </div>
      </div>


    </div>
  );
};

export default Fourth;
