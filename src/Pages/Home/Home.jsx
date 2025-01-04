import React, { useEffect, useState } from 'react';
import "../../Pages/Home/Home.css";
import heroImg from "../../assets/hero-banner.png";
import {Link} from "react-router-dom"
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";

function Home() {
  const [star, setStar] = useState(true);
  const [alldata, setAlldata] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [input, setInput] = useState('');
  const [currency, setCurrency] = useState({ name: 'USD', symbol: '$' });

  // Fetch data from the API
  const fetchData = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-pHf31zkRTE8SGXcFdb16G8vC' },
    };

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
        options
      );
      const data = await response.json();
      setAlldata(data);
      setFilteredData(data);
      console.log(data)
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  // Update input state
  const inputHandler = (e) => {
    setInput(e.target.value);
    if(e.target.value === ""){
      fetchData();
    }
  };

  // Filter coins based on search input
  const searchHandler = (event) => {
    event.preventDefault();
    const coins = alldata.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredData(coins);
  };

  useEffect(() => {
    fetchData();
  }, [currency]);

  return (
    <div className="HomeMain">
      {/* Hero Section */}
      <div className="hero">
        <div className="heroText">
          <h1>India's First Platform for </h1>
          <h2>Learning Crypto Trading!</h2>
          <center>
            <h5>Your gateway to mastering crypto trading.</h5>
          </center>
        </div>
        <div className="heroImg">
          <img src={heroImg} alt="Hero Banner" className="mainimg" />
        </div>
      </div>

      {/* Search Bar */}
      <center>
        <form onSubmit={searchHandler}>
          <input type="text" placeholder="Search Crypto.." className="inputfild" list='coinlist' onChange={inputHandler} value={input}  required />
          <datalist id='coinlist'>{alldata.map((item,index)=>(<option key={index} value={item.name}/>))}</datalist>
          <button type="submit">Search</button>
        </form>
      </center>

      {/* Info Bar */}
      <div className="infocard">
        <center>
          <div className="infobarCO">
            <div>#</div>
            <div id="infonm">Name</div>
            <div id="infopri">
              <div className="dropdown">
                <button
                  id="currbtn"
                  className="btn btn-outline-light btn-sm dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Price ({currency.name})
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={() => setCurrency({ name: 'USD', symbol: '$' })}
                    >
                      USD $
                    </div>
                  </li>
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={() => setCurrency({ name: 'INR', symbol: '₹' })}
                    >
                      INR ₹
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div id="info24ch">24h%</div>
            <div id="infomcap">Market Cap</div>
          </div>
        </center>
      </div>

      {/* Crypto Table */}
      <div className="cryptoTable">
        <center>
          {filteredData.map((data, index) => (
            <Link to={`coin/${data.id}`} style={{ color: 'inherit', textDecoration: 'none' }} className="coincardMain" key={index}>
              <div className="coinstrip">
                <span id="indexcou">#{data.market_cap_rank  }</span>

                <div id="nmall">
                  <img src={data.image} alt="Crypto Logo" id="currlogo" />
                  {data.id.slice(0, 13)}
                  <span id="symb">{data.symbol.toUpperCase()}</span>
                </div>

                <div style={{ width: '24%' }} id="textedit">
                  {currency.symbol} {data.current_price}
                </div>
                <div style={{ width: '17%' }} id="textedit">
                  {Math.floor(data.price_change_percentage_24h * 100) / 100}
                </div>
                <div style={{ width: '17%' }} id="textedit">
                  {currency.symbol} {data.market_cap}
                </div>
              </div>
            </Link>
          ))}
        </center>
      </div>
    </div>
  );
}

export default Home;
