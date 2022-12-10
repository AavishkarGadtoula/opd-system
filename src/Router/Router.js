import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Home from "../Pages/Home/Home"
import About from "../Pages/About/About"
import Servies from "../Pages/Services/Services"
import Contact from "../Pages/Contact/Contact"

const Router1 = () => {
    return <div>
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="Home" element={<Home />} />
                <Route path="About" element={<About/> } />
                <Route path="Services" element={<Servies/> } />
                <Route path="Contact" element={<Contact/> } />
            
            </Routes>
      </BrowserRouter>
  </div>;
};

export default Router1;
