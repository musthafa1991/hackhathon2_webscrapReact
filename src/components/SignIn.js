import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export  function SignIn() {
    const navigate=useNavigate();
    const formik=useFormik({
        initialValues:{
                username:"",
                password:""
        },
        onSubmit:async(values)=>{
           let signin= await axios.post("https://scrapshoping.herokuapp.com/signin",values)
           console.log(signin)
           window.localStorage.setItem("app_token",signin.data.token);
            navigate("/signup")

        }
    })
  return (
    <div className="container">
    <h2 style={{"text-align":"center"}}>Sign In</h2>
   
    <div className="row">
    <form onSubmit={formik.handleSubmit}>
      
        <div className="offset-4 col-lg-4">
            <label >User name</label>
            <input type="text" name='username' onChange={formik.handleChange}
         value={formik.values.username} className="form-control" />
           
        </div>
       
      
        <div className="offset-4 col-lg-4">
            <label >Password</label>
            <input type="password" name='password' onChange={formik.handleChange}
         value={formik.values.password} className="form-control"  />
         <Link to='/forgetpassword' style={{"text-align":"center"}}>Forget Password</Link>
        </div>
        
       <div className="offset-4">
           <button type="submit" className="btn-primary mt-3">Sign In</button>
       </div>
        
    </form>
    </div>
   
</div>
  )
}

