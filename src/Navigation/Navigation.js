import { useState} from "react";
import React from "react";
import "./navigation.css";
import { FaHamburger, FaRegWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";

const navItems = ["Home", "About", "Services", "Contact", "Dashboard"];

const Navigation = () => {
  const [responsiveNavClass,setresponsiveNavClass]=useState("reponsive-nav")
  const showNavbar = () => {
    setresponsiveNavClass("")
  };
  const hideNav = () => {
    setresponsiveNavClass("reponsive-nav")
    
  }
  return (
    <div className="navigation">
      <Link to={"/Home"} className="logo">
        Digital Purja
      </Link>
      <div className={`navigation-list ${responsiveNavClass}`} >
        {navItems.map((navItem) => {
          return (
            <Link to={"/" + navItem} onClick={hideNav} className="navigation-item" key={navItem}>
              {navItem}
            </Link>
          );
        })}
        <div className="ham-bar nav-close" onClick={hideNav}>
        {" "}
        <FaRegWindowClose
          style={{ marginLeft: "12px", marginTop: "5px" }}
        />{" "}
      </div>
      </div>
      <div className="ham-bar" onClick={showNavbar}>
        {" "}
        <FaHamburger style={{ marginLeft: "12px", marginTop: "5px" }} />{" "}
      </div>
      
      <div className="nav-btn">
        <button className=" btn-design">Login</button>
      </div>
    </div>
  );
};

export default Navigation;
