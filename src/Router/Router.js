import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Home from "../Pages/Home/Home"
import About from "../Pages/About/About"
import Servies from "../Pages/Services/Services"
import Contact from "../Pages/Contact/Contact"
import Dashboard from "../Pages/Dashboard/Dashboard"
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/Sign-Up/Sign-up";
import SignIn from "../Pages/Login/Sign-In/Sign-in";

const Router1 = () => {
    return <div>
        <BrowserRouter>
            <Navigation />
            <div style={{marginLeft:"200px"}}>
            <Routes>
                    <Route path="/Home" element={<Home />} />
                <Route path="/About" element={<About/> } />
                <Route path="/Services" element={<Servies/> } />
                <Route path="/Contact" element={<Contact/> } />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/SignIn" element={<SignIn />} />

                        

            
                </Routes>
                </div>
      </BrowserRouter>
  </div>;
};

export default Router1;
