import React from 'react'
import "../Navbar/Navbar.css"
import logo from '../../assets/logo.png'
import { GoArrowUpRight } from "react-icons/go";
import { IoWallet } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='NavbarMain'>

      <div className='navfirstDiv'>
  <img src={logo} alt="logo" className='mainlogo' style={{marginTop:'-9px'}} />
  <Link to={'/'} id='linkstyl'><h2>CryptoCraft</h2> </Link>  
      </div>

      <div className='navsecondDiv'>
      <ul>
      <Link to={'/'} id='linkstyl'><li>Home</li></Link>  
        <li>Exchanges</li>
        <li>Portfolio</li>
        <li>Price</li>
      </ul>
      </div>


      <div className='navthirdDiv'>
      <div ><IoWallet className='walletlogo'/></div>
      <div><IoMdNotifications className='walletlogo'/></div>
      <button className='loginBtn'>Login <GoArrowUpRight/></button>
      </div>

{/* /////////////// drop down ////////////// */}
<div className="dis">
      <div className="dropdown">
  <span><MdOutlineMenu id='logomenu'/></span>
  <div className="dropdown-content">
    <li>Home</li>
    <li>Exchanges</li>
    <li>Portfolio</li>
    <li>Price</li>
    <button className='loginBtn' style={{width:'150px',paddingLeft:'45px'}}>Login <GoArrowUpRight/></button>
  </div>
</div>
</div>
    </div>
  )
}

export default Navbar
