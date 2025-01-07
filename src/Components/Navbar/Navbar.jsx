import React, { useState } from 'react'
import "../Navbar/Navbar.css"
import logo from '../../assets/logo.png'
import { GoArrowUpRight } from "react-icons/go";
import { IoWallet } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify'


function Navbar() {
    const [isLogin,setisLogin]=useState(true);
  

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
        {isLogin ? <li>Portfolio</li> : <li onClick={()=>toast("Login required to view this section.")}>PortfolioNO</li>}
        <li>Price</li>
      </ul>
      </div>


      <div className='navthirdDiv'>
      {isLogin ?   <div ><IoWallet className='walletlogo'/></div> :  <div ><IoWallet className='walletlogo' onClick={()=>toast("Login required to view this section.")}/></div>}<div><IoMdNotifications className='walletlogo'/></div>
    <center>  {isLogin ? <Link to={'/profile'} className='profilIconLINK'><CgProfile className='profilIcon'/> </Link>: <Link id='loginLNK' to={"/login"}><button className='loginBtn'>Login <GoArrowUpRight/></button></Link>}</center>
      
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
    
  {isLogin ?<div className='responsiveProfile'><CgProfile className='profilIcon' /><p>Profile</p></div>: <button className='loginBtn' style={{width:'150px',paddingLeft:'45px'}}>Login <GoArrowUpRight/></button>} 
  </div>
</div>
</div>
    </div>
  )
}

export default Navbar
