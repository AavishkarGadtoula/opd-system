import React from "react"
import { Link } from "react-router-dom";
// import SignIn from "./Sign-In/Sign-in";


const Login = () => {
    return <div>
        <div className="section">
            {/* <SignIn /> */}
            <div className="login-doctor">
                <Link to="/SignIn">Sign In as Patient</Link>
            </div>
            <div className="login-user">
                <Link to="/SignIn">Sign In as Doctor</Link>
            </div>
        </div>   
    </div>
}

export default Login;