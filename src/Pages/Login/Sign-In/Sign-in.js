import React from "react";
import { useFormik } from "formik";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
// import SignUp from "./Sign-Up/Sign-up";
import * as yup from 'yup';
import "./sign-in.css"


let schema = yup.object().shape({ 
    // firstName: yup.string().required().min(5, "Must be more than 5"),
    // lastName: yup.string().required().min(5, "Must be more than 5"),
    email: yup.string().email(),
    password: yup.string().required().min(5, "Must be more than 5"),
    // abc: yup.array().required().min(5, "").max(10, "").default((value) => {
    //     return true;
    //     return false;
    // })
});

const fetch_api = async(d) => {
    try {
        const data = await fetch("http://localhost:9000/sign-in", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json;charset=utf-8",
            },  
            body:JSON.stringify({ ...d })
        }).then((response)=>{return response.json()})
        return data;
    } catch (err) {
        
     }
}

const SignIn = () => {
    const formik = useFormik({
        initialValues: {
            // firstName: "",
            // lastName: "",
            email: "",
            password: "",
        },
        // validate,
        validationSchema: schema,
        validateOnChange: false,
        validateOnBlur:false,
        onSubmit: async(values) => {
            console.log(values);
            const data =await fetch_api(values)
            console.log(data,"data")
        },
    });

    return (
        <div className="sign-in"> 
            <form onSubmit={formik.handleSubmit}>
                {/* <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="off"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                />

                {formik.touched.firstName && formik.errors.firstName ? (
                    <div>{formik.errors.firstName}</div>
                ) : null}
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="off"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                />
                {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null} */}
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="off"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />

                {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="off"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                <button type="submit">Sign In</button>
                <p>Don't have an account? <Link className="link" to="/SignUp">Sign Up</Link></p>
                {/* <BrowserRouter>
                    <Routes>
                        <Route path="SignUp" element=<SignUp /> />
                        <Button />
                    </Routes>
                </BrowserRouter> */}
            </form>
        </div>
    );
};

export default SignIn;
