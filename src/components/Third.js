import React,{useState} from "react";
import image1 from "../assets/10173124_8432.jpg";
import image2 from "../assets/13399747_Presentation_1.jpg";
import image3 from "../assets/79z_2204_w012_n001_50b_p12_50.jpg";
import image4 from "../assets/Group 28.svg";
import image5 from "../assets/Group 52.svg";
import apple from "../assets/Icon awesome-apple.svg";
import google from "../assets/Group 53.svg";
import { Link } from "react-router-dom";
import More from "./More";
const Third = () => {
  
    const [state,setState ] = useState(false)
  return (
    <div className="third">
      <h2>Why do people get involved with Cryptocurrencies?</h2>
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
      {state && <More/>}
      <button id="btn6" onClick={()=>setState(!state)}>
                {state ? 'learn less' : 'learn more'}{''}
            </button>
      {/* <button >learn More</button> */}
      <h2>Buy and Sell your Cryptocurrency in 3 simple steps</h2>
      <div className="too">
        <div className="pur">
          <div className="purp">1</div>
          <h6>Create a free Account</h6>
          <p>
            Sign up for your free TradExpress Wallet on web, iOS, or Android
            devices and follow our easy process to set up your profile.
          </p>{" "}
        </div>{" "}
        <img src={image4} alt="" />{" "}
      </div>

      <div className="tooo">
        {" "}
        <img src={image5} alt="" />
        <div className="pur">
          <div className="purp">2</div>
          <h6>Deposit</h6>
          <p>
            Choose your preferred deposit option like bank transfer,
            credit/debit card or send digital asset directly to your wallet for
            easy funding/withdrawal.
          </p>{" "}
        </div>{" "}
      </div>

      <div className="too">
        <div className="pur">
          {" "}
          <div className="purp">3</div>
          <h6>Buy/ Sell Crypto</h6>
          <p>
            Buy BTC, USDT, ETH, LTC, XRP, DOGE and securely store it in your
            wallet or send it easily to friends and family.
          </p>{" "}
        </div>{" "}
        <img src={image4} alt="" />{" "}
      </div>
      <div className="last">
        <h6>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</h6>
        <h3>Create your account for free and start trading today!</h3>
      <Link to='Contact'> <button id="btn7">Get Started</button> </Link> 
        <div className="butt">
          <button id="btn8">
            <img src={apple} alt="" id="applee" />
            <div className="ina">
              Download on the <br /> <span> App Store</span>{" "}
            </div>{" "}
          </button>
          <button id="btn9">
            <img src={google} alt="" id="googlee" />
            <div className="ina">
              Get on <br /> <span> Google Play </span>{" "}
            </div>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Third;
