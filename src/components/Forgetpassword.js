import { useFormik } from 'formik'
import React from 'react'

function Forgetpassword() {
    const formik=useFormik({
        initialValues:{
            email:""
        },
        onSubmit:(values)=>{
            console.log(values)
        }
    })
  return (
    <div className="container">
    <h2 style={{"text-align":"center"}}>Enter your email</h2>
   
    <div className="row">
    <form onSubmit={formik.handleSubmit}>
      
        <div className="offset-4 col-lg-4">
            
            <input type="text" name='email' placeholder='Enter the email' onChange={formik.handleChange}
         value={formik.values.email} className="form-control" />
           
        </div>
       
      
        
       <div className="offset-4">
           <button type="submit" className="btn-primary mt-3">Submit</button>
       </div>
        
    </form>
    </div>
   
</div>
  )
}

export default Forgetpassword