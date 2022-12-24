// import { useState} from "react";
import React from "react";
import "./navigation.css";
// import { FaHamburger, FaRegWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";


const navItems = ["Home", "About", "Services", "Contact", "Dashboard","Login"];

const Navigation = () => {
  // const [responsiveNavClass,setresponsiveNavClass]=useState("reponsive-nav")
  // const showNavbar = () => {
  //   setresponsiveNavClass("")
  // };
  // const hideNav = () => {
  //   setresponsiveNavClass("reponsive-nav")
    
  // }
  return (
    
    <div className="navigation">
      <div className="logo">
      <Link to={"/Home"} className="logo-des">
        Digital Purja
        </Link>
        </div>
      <div className="navigation-list" >
        {navItems.map((navItem) => {
          return (
            
            <Link to={"/" + navItem}  className="navigation-item" key={navItem}  >
              {navItem}
              </Link>
              
          );
        })}
        {/* <div className="ham-bar nav-close" onClick={hideNav}>
        {" "}
        <FaRegWindowClose
          style={{ marginLeft: "12px", marginTop: "5px" }}
        />{" "}
      </div> */}
      </div>
      {/* <div className="ham-bar" onClick={showNavbar}>
        {" "}
          <FaHamburger
            style={{ marginLeft: "12px", marginTop: "5px" }} 
            
            />{" "}
      </div> */}
      
      {/* <div className="nav-btn">
          
          <Link to={"/Login"} className="btn-design">Login</Link>
      </div> */}
      </div>
  );
};

export default Navigation;
