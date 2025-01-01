import React from 'react'
import "../Navbar/Navbar.css"
import logo from '../../assets/logo.png'
import { GoArrowUpRight } from "react-icons/go";
import { IoWallet } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";



function Navbar() {
  return (
    <div className='NavbarMain'>

      <div className='navfirstDiv'>
      <img src={logo} alt="logo" className='mainlogo' /> 
      <h2>CryptoDhan</h2>
      </div>

      <div className='navsecondDiv'>
      <ul>
        <li>Home</li>
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
    </div>
  )
}

export default Navbar
