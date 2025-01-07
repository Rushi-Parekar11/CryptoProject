import React from 'react'
import "../Profile/Profile.css"
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown} from "react-icons/io";



function Profile() {
  return (
    <>
        <div className="mainProfileDIV">
            <div className="mainInfoDIV">
             <center><CgProfile className='profileiconPRO'/></center> 
             <center><h5>RushiParekar</h5></center>
             <div className='inlinegmail'><h6> rushiparekar11@gmail.com</h6></div> 
             <hr style={{margin:'4px'}}/>
             <div className='inline'><p>Reports <IoIosArrowDown/></p></div> 
             <hr style={{margin:'4px'}}/>
             <div className='inline'><h6><p>History  <IoIosArrowDown/></p></h6></div> 
             <hr style={{margin:'4px'}}/>
             <div className='inline'><h6><p>Transaction History  <IoIosArrowDown/></p></h6></div> 
             <hr style={{margin:'4px'}}/>
             <div className='inline'><h6><p>Bank Details  <IoIosArrowDown/></p></h6></div> 
        
            </div>




            <div className="mainwalletDIV">

                
            </div>
        </div>
    </>
  )
}

export default Profile
