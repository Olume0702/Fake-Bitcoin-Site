import React,{useState} from "react";
import image1 from "../assets/10173124_8432.jpg";
import image2 from "../assets/13399747_Presentation_1.jpg";
import image3 from "../assets/79z_2204_w012_n001_50b_p12_50.jpg";


function More (){
    return(
        <div>
 <div className="poo">
        <div className="po">
          <img src={image1} alt="" />
          <h5>Easy Mode of Payment</h5>
          <p>
            People can now easily send and receive money from <br />
            anywhere in the world to purchase goods and pay for services.
          </p>
        </div>

        <div className="po">
          <img src={image3} alt="" />
          <h5>Financial Freedom</h5>
          <p>
            Just like the internet no single entity controls the <br />
            Crypto network which provides users transparency and privacy, <br />
            which puts you in absolute control of your money.
          </p>
        </div>

        <div className="po">
          <img src={image2} alt="" />
          <h5>Investment</h5>
          <p>
            The constant demand as made Cryptocurrecies a Digital Gold <br />
            used for alternative store of wealth on long term investments.
          </p>
        </div>
      </div>

        </div>
    )
}
export default More