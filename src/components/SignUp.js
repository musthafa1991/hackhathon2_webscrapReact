import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";



export function SignUp() {
    const navigate=useNavigate();
    const formik=useFormik({
        initialValues:{
            username:"",
            email:"",
            password:""
        },
        onSubmit:async (values)=>{
           const data=await axios.post("https://scrapshoping.herokuapp.com/signup",values);
           navigate("/signin")
        }
    })
    return (
        <div className="container">
            <h2 style={{"text-align":"center"}}>Sign Up</h2>
           
            <div className="row">
            <form onSubmit={formik.handleSubmit}>
              
                <div className="offset-4 col-lg-4">
                    <label >User name</label>
                    <input type="text" name="username" onChange={formik.handleChange}
         value={formik.values.username} className="form-control" />           
                </div>
               
               <div className="offset-4 col-lg-4">
                    <label >Email address</label>
                    <input type="email" name="email" onChange={formik.handleChange}
         value={formik.values.email} className="form-control" />                  
                </div>

                <div className="offset-4 col-lg-4">
                    <label >Password</label>
                    <input type="password" name="password" onChange={formik.handleChange}
         value={formik.values.password} className="form-control"  />
                </div>
               <div className="offset-4">
                   <button type="submit" className="btn-primary mt-3">Sign Up</button>
               </div>
                
            </form>
            </div>
           
        </div>
    )

}