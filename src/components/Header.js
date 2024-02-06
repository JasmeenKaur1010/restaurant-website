import img from "../logo-PhotoRoom.png"
import { useState } from "react";
// building header component and in this header we have section for logo and nav items
const Header = () =>{
  const [btnName,setBtnName] = useState("Login")
    return(
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={img} alt ="logo-PhotoRoom.png"/>
        </div>
       
     
      <div className="nav-items" >
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
        <button className="login" onClick={()=>{
          btnName ==="login"?setBtnName("Logout"):setBtnName("Login")
        }}>{btnName}</button>
      </ul>
      </div>
      </div>
    )
  }

export default Header;