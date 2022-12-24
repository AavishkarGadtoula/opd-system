import React from "react";
import { useFormik } from "formik";
import * as yup from 'yup';
import "./sign-up.css"

// const validate = (values) => {
//     const errors = {};
//     if (!values.firstName) {
//         errors.firstName = "Required";
//     } else if (values.firstName.length < 5) {
//         errors.firstName = "Must be more than 5";
//     }

//     if (!values.lastName) {
//         errors.lastName = "Required";
//     } else if (values.lastName.length < 5) {
//         errors.lastName = "Must be more than 5";
//     }

//     if (!values.email) {
//         errors.email = "Required";
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = "Invalid email address";
//     }

//     if (!values.password) {
//         errors.password = "Required";
//     } else if (!/^(?=.*[a-z])(?=.*[0-9]).{8,24}$/i.test(values.password)) {
//         errors.password = "Invalid format";
//     }
//     return errors;
// };

let schema = yup.object().shape({
    firstName: yup.string().required().min(5, "Must be more than 5"),
    lastName: yup.string().required().min(5, "Must be more than 5"),
    email: yup.string().email(),
    password: yup.string().required().min(5, "Must be more than 5"),
});

const fetch_api = async(d) => {
    try {
        const data = await fetch("http://localhost:9000/sign-up", {
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



const SignUp = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password:""
        },
        // validate,
        validationSchema: schema,
        validateOnChange: false,
        validateOnBlur:false,
        onSubmit: async(values) => {
            //   alert(JSON.stringify(values))
            console.log(values);
            const data =await fetch_api(values)
            console.log(data,"data")
            // console.log(formik.errors)
        },
    });

    return (
        <div className="section">
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="off"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                />
                
                {formik.errors.firstName ? <div>{formik.errors.firstName}</div>:null }
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
                {formik.errors.lastName ? <div>{formik.errors.lastName}</div>:null }
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

                {formik.errors.email ? <div>{formik.errors.email}</div>:null }
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
                {formik.errors.password ? <div>{formik.errors.password}</div>:null }
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;

