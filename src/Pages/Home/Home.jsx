import React, { useState } from 'react'
import "../../Pages/Home/Home.css"
import heroImg from "../../assets/hero-banner.png";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";




function Home() {
  const [star,setstar] = useState(true)
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
                        <div style={{ paddingLeft: '130px' }}>Price</div>
                        <div style={{ paddingLeft: '140px' }}>24h%</div>
                        <div style={{ paddingLeft: '110px' }}>Market Cap</div>
                        <div style={{ paddingLeft: '170px' }}>Volume</div>
                    </div>
                </center>
</div>

      <div className="cryptoTable">
      <center>
      <div className="coincardMain"> 
      <div className="coinstrip">
                        <div>1</div>
                        <div style={{ paddingLeft: '40px' }}>Bitcoin</div>
                        <div style={{ paddingLeft: '10px' }}><p>BTC</p></div>
                        <div style={{ paddingLeft: '90px' }}>₹8,049,257.17</div>
                        <div style={{ paddingLeft: '85px' }}>-0.12%</div>
                        <div style={{ paddingLeft: '80px' }}>₹159,440,556,631,178</div>
                        <div style={{ paddingLeft: '90px' }}>₹4,443,552,398,916</div>
                    </div>
        </div>
        <div className="coincardMain"> 
      <div className="coinstrip">
                        <div>1</div>
                        <div style={{ paddingLeft: '40px' }}>Bitcoin</div>
                        <div style={{ paddingLeft: '10px' }}><p>BTC</p></div>
                        <div style={{ paddingLeft: '90px' }}>₹8,049,257.17</div>
                        <div style={{ paddingLeft: '85px' }}>-0.12%</div>
                        <div style={{ paddingLeft: '80px' }}>₹159,440,556,631,178</div>
                        <div style={{ paddingLeft: '90px' }}>₹4,443,552,398,916</div>
                    </div>
        </div>
        </center>
      </div>
    </div>
  )
}

export default Home
