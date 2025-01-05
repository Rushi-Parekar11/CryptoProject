import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaRegStar, FaStar } from "react-icons/fa";
import { MdAccessAlarm } from "react-icons/md";
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { SiBitcoinsv } from "react-icons/si";
import "../Coins/Coins.css";
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,} from 'chart.js';
ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip, Legend);
import { useParams } from 'react-router-dom';

const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        intersect: false, // Ensures tooltip activates even between data points
        mode: 'index', // Shows tooltip for closest dataset index
        callbacks: {
          label: function (context) {
            return `Price: ${context.raw}`; // Custom label for tooltip
          },
        },
      },
    },
    hover: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      x: {grid: {display: false,},ticks: {display: false, },},
      y: {grid: {display: false,},ticks: {display: false,},},
    },
    elements: {
      point: {
        radius: 0, 
      },
      line: {
        borderColor: '#ffffff', 
      borderWidth: 2, 
      },
    },
    
    interaction: {
      intersect: false,
      mode: 'index',
    },
    
    layout: {
      padding: {
        top: 1,
        bottom: 60,
      },
    },
    animation: true, 
  };
  


function Coin() {

    // const isoDate = Coindata.last_updated.slice(11, 19);
    const [star, letstar] = useState(true);
    const [chartData, setChartData] = useState(null); 
    // const [timeBtns,settimeBtns]=useState(1)

    // const timeBtnshandel=(getdays)=>{
    //      settimeBtns(getdays);    
    //      fetchChartData()
    // }
    const { coinId } = useParams();
    const [coindata,setcoindata] = useState([]);
    const [currency, setCurrency] = useState({ name: 'USD', symbol: '$' });


    const fetchData = async () => {
      const check ={};
      const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-pHf31zkRTE8SGXcFdb16G8vC'}
      };
      const data = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinId}`, options)
        .then(data => data.json())
        .then(data => setcoindata(data))
        .catch(err => console.error(err));
    };

    const fetchChartData = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-pHf31zkRTE8SGXcFdb16G8vC'}
        };
        
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=inr&days=5`,options);
        const prices = res.data.prices;
          const labels = prices.map(([timestamp]) =>
              new Date(timestamp).toLocaleDateString('en-IN')
          );
          const data = prices.map(([, price]) => price);
          setChartData({labels,datasets: [
                  {
                      label: 'Bitcoin Price (INR)',
                      data,
                      borderColor: pers > 0 ? '#00b386' : '#eb5b3c',
                      borderWidth: 3,
                      filler: true,
                  },
              ],
          });
      } catch (error) {
          console.error('Error fetching chart data:', error);
      }

  };

    useEffect(() => {
        fetchData();
        fetchChartData();
    }, []);

    const [price,setprice]=useState(0);

    const handleChange = (e) => {
        setprice(e.target.value );
      };

      // const buycoin=(data)=>{
      //   setmycoins(...data,mycoins);
      //   console.log(data)
      // }
      const buycoin = (data) => {
        setmycoins((previous)=>[...previous,data]);
    };
    
    console.log(coindata)
    console.log(chartData)
    console.log(coindata[0]?.ath_change_percentage); 
    let pers = coindata[0]?.ath_change_percentage;



    return (
        <>
            <div className='MainContainer'>
                <div className="Allinfo">
                    <div className='DisclaimerStrip'>
                        <p className='Disclaimer'> Disclaimer:Today, 5:30 </p>
                    </div>

                    <div className='logoStrip'>
                        <div className="imgbox">
                            <img src={coindata[0]?.image} alt="Coin Logo" height={'60px'} width={'60px'} />
                        </div>
                        <div className='twoButtonDiv'>
                            <div className='WLbutton' onClick={() => letstar(!star)}>
                                {star ? <FaRegStar className='str' /> : <FaStar className='stryellow' />}
                                <p className='DisclaimerWL'>WatchList</p>
                            </div>
                            <div className='WLbutton'>
                                <MdAccessAlarm className='str' />
                                <p className='DisclaimerWL'>Create Alert</p>
                            </div>
                        </div>
                    </div>

                    <div className='nameStrip'>
                        <p className='mainname'>{coinId}</p>
                    </div>

                    <div className='priceStrip'>
                        <p className='mainprice'>₹ {coindata[0]?.current_price.toLocaleString('en-IN')}</p>
                        <p style={pers > 0 ? { color: 'green' } : { color: '#eb5b3c' }}>
                        {coindata[0]?.ath_change_percentage !== undefined   ? (Math.floor(coindata[0].ath_change_percentage * 10) / 100) : '--'} 
                               </p>
                    </div>

                    <div className='grapStrip'>
                        <div>
                            <p className='DataPastDays'>{coinId} Price Chart (Last 5 Days)</p>
                            {chartData ? (<Line data={chartData} options={options} />) : (<p>Chart Loading ...</p>)}
                        </div>
                    </div>
                        <div className="timedataBtn">
{/* <button className="timeBtns" onClick={()=>timeBtnshandel(1)} style={{ borderColor: timeBtns === 1 ? '#424242' : 'rgb(223, 221, 221)' }}>24hr</button>
<button className="timeBtns" onClick={()=>timeBtnshandel(6)} style={{ borderColor: timeBtns === 6 ? '#424242' : 'rgb(223, 221, 221)' }}>1W</button>
<button className="timeBtns" onClick={()=>timeBtnshandel(15)} style={{ borderColor: timeBtns === 15 ? '#424242' : 'rgb(223, 221, 221)' }}>15D</button>
<button className="timeBtns" onClick={()=>timeBtnshandel(30)} style={{ borderColor: timeBtns === 30 ? '#424242' : 'rgb(223, 221, 221)' }}>1M</button> */}
</div>

<hr />


<div className="fundamentals">
<div className='fundapart'>
<p className='mainnameFUNDAMANTALS'>Fundamentals</p>
    <div className="fundaDisclaimer">Market Cap &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   <p className='funda'>{coindata[0]?.market_cap}</p> </div>
    <div className="fundaDisclaimer">Total Volume &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <p className='funda'>{coindata[0]?.total_volume}</p></div>
    <div className="fundaDisclaimer">Circulating supply <p className='funda'>{coindata[0]?.circulating_supply}</p></div>
    <div className="fundaDisclaimer">Total Supply  &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p className='funda'>{coindata[0]?.total_supply}</p></div>
    <div className="fundaDisclaimer">ath &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p className='funda'>{coindata[0]?.ath}</p></div>
</div>
    
    <div id='hideinresponsive' className='fundapart'>
<p className='mainnameFUNDAMANTALS' >-</p>
    <div className="fundaDisclaimer">High 24h  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p className='funda'>{coindata[0]?.high_24h}</p></div>
    <div className="fundaDisclaimer">Low 24h  &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p className='funda'>{coindata[0]?.low_24h}</p></div>
    <div className="fundaDisclaimer">Price Change 24h&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p className='funda'>{coindata[0]?.price_change_24h}</p> </div>
    <div className="fundaDisclaimer">Market C Change 24h <p className='funda'>{coindata[0]?.market_cap_change_24h  }</p></div>
    <div className="fundaDisclaimer">atbh date  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;<p className='funda'>{coindata[0]?.ath_date}</p></div>
</div>

</div> 

                </div>

                <div className="BuyCard">
                  <div className="buycardmain">
                        <p className='buyCardName'>{coindata[0]?.id}&nbsp;&nbsp;{coindata[0]?.symbol.toUpperCase()}</p>
                        <p className='Disclaimer' style={{marginLeft:'10px'}}>₹{coindata[0]?.current_price.toLocaleString('en-IN')} &nbsp;&nbsp; ({Math.floor(pers*10)/100}%)</p>
                        <hr />
                        
                        <div className="buycontent">
                            <p id='bcd' className='buyCardName'>Quantity : <input type="text" value={price} onChange={handleChange} id="qut" /></p>
                            <p className='buyCardName'>Per Qua : &nbsp; &nbsp; ₹{coindata[0]?.current_price.toLocaleString('en-IN')}</p>
                            <p className='buyCardName'>Required : &nbsp;&nbsp; ₹{(price * coindata[0]?.current_price).toLocaleString('en-IN')}</p>
                        </div>


                        <hr />
                        <p className='Disclaimer' style={{marginLeft:'10px'}}>Total  :&nbsp;&nbsp; ₹{(price * coindata[0]?.current_price).toLocaleString('en-IN')}</p>
                        
                        <button id='buybtn' type="button" className="btn btn-primary" >Buy</button>
                        {/* <button id='buybtn' type="button" className="btn btn-primary" onClick={()=>buycoin(Coindata)}>Buy</button> */}


                    </div> 
                </div>
            </div>
        </>
    );
}

export default Coin;
