import React, { useContext, useEffect, useState } from 'react'
import "../../Pages/Home/Home.css"
import heroImg from "../../assets/hero-banner.png";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";



function Home() {
  const [star,setstar] = useState(true);
  const [alldata,setalldata]= useState([]);
  const [curreny,setcurrency]=useState({
    name:'USD',symbol:'$'
  })

const fetchdata=async()=>{
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-pHf31zkRTE8SGXcFdb16G8vC'}
    };
    
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${curreny.name}`, options);
      const data = await response.json(); 
      console.log(data);
      setalldata(data); 
    } catch (err) {
      console.error('Error fetching data:', err); 
    }
    
  }

  useEffect(() => {
    fetchdata();
  }, [curreny]);

  return (
    <div className='HomeMain'>
    <div className="hero">
    <div className='heroText'>
      <h1>India's First Platform for </h1>
      <h2>Learning Crypto Trading !</h2>
      <center><h5>Your gateway to mastering crypto Trading.</h5></center>
    </div>
    <div className="heroImg">
      <img src={heroImg} alt="" className='mainimg' />
    </div>
    </div>


    <center> 
    <form action="">
        <input type="text" placeholder='Search Crypto..' className='inputfild'/>
        <button type="submit">Search</button>
      </form>
      </center> 


<div className="infocard"><center>
                    <div className="infobarCO">
                        <div>#</div>
                        <div style={{ paddingLeft: '50px' }}>Name</div>
                        <div style={{ paddingLeft: '160px' }}>
                        <div className="dropdown">
  <button className="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown">Price ({curreny.name})</button>
  <ul className="dropdown-menu">
    <li><div className="dropdown-item" onClick={()=>setcurrency({name:"USD",symbol:"$"})}>USD $</div></li>
    <li><div className="dropdown-item" onClick={()=>setcurrency({name:"INR",symbol:"₹"})}>INR ₹</div></li>
  </ul>
</div>



                        </div>
                        <div style={{ paddingLeft: '100px' }}>24h%</div>
                        <div style={{ paddingLeft: '130px' }}>Market Cap</div>
                        <div style={{ paddingLeft: '90px' }}>Volume</div>
                    </div>
                </center>
</div>

      <div className="cryptoTable">
      <center>



       {alldata.map((data,index)=>(
        <div className="coincardMain" key={data.id}> 
      <div className="coinstrip" >
                        <span  style={{width:'6%'}}>#{index+1}</span>

                        <div style={{width:'25%',paddingLeft:'5px'}}>
                        <img src={data.image} alt="img" style={{width:'34px',paddingRight:'10px'}}/>
                        {data.id.slice(0,12)}
                        <span style={{paddingLeft:'15px'}}>{data.symbol.toUpperCase()}</span></div>

                        <div style={{width:'20%'}} >{curreny.symbol} {data.current_price}</div>
                        <div  style={{width:'17%'}}>{data.price_change_percentage_24h}</div>
                        <div style={{width:'17%'}}>{data.market_cap}</div>
                        <div style={{width:'15%'}}>{data.total_volume}</div>
                    </div>
        </div>
       ))}
        </center>
      </div>
    </div>
  )
}

export default Home
