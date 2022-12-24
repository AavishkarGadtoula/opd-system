import React from "react";
import image from "../../assets/Home-img/doctor-appointment.png"
import { Link } from "react-router-dom";

import './home.css'


const Home = () => {
    return <div className="home">
        
        <div className="image">
                <img alt="" src={image} />
        </div>
        <div className="content">
            <h3>Find your doctor and make appointment</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor at metus efficitur fermentum. Nullam commodo feugiat lectus sit amet molestie. Maecenas erat ligula</p>
            <Link className="btn-home" to="/Contact">Contact Us</Link>
        </div>
    </div>
}

export default Home;