import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";

const navItems = ["Home", "About", "services", "Contact"];

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to={"/Home"} className="logo">Digital Purja</Link>
      <div className="navigation-list">
        {navItems.map((navItem) => {
          return (
            <Link to={"/"+ navItem} className="navigation-item" key={navItem}>
              {navItem}
            </Link>
          );
        })}
      </div>

      <button className="nav-btn btn-design">Login</button>
    </div>
  );
};

export default Navigation;
