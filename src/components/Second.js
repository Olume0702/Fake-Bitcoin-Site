import React, { useState, useEffect } from "react";
import { FaArrowDown,FaArrowUp,FaArrowsAltH } from "react-icons/fa";


function Second() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch("https://api.coinlore.net/api/tickers/?start=0&limit=4")
        .then((response) => response.json())
        .then((data) => setData(data.data))
        .catch((error) => console.log(error));
    }, []);
  
    function getPriceDirection(change) {
      if (change > 0) {
      return <FaArrowUp style={{color: 'blue', fontSize: '15px'}}/>;
      } else if (change < 0) {
        return <FaArrowDown style={{color: 'red', fontSize: '15px'}}/>;
      } else {
        return <FaArrowsAltH style={{color: 'purple', fontSize: '15px'}}/>;
      }
    }
  
    return (
      <div id="second">
        {/* <h1>Cryptocurrencies</h1> */}
        <div id="price">
          {data.map((crypto) => (
            <div key={crypto.id}>
             <div id="pric"> <p>{crypto.symbol}/ <span> NGN </span> {crypto.percent_change_24h } {getPriceDirection(crypto.percent_change_24h)} </p> </div>
              <p>{crypto.price_usd } <span>NGN</span> </p>
              
            </div>
          ))}
        </div>
      </div>
    );
  }
  

export default Second;


 
  
