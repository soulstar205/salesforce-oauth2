import React from 'react'
import './register.css'

 const Register = () =>{
    
    return(
        <div className="container">
            <form action="http://localhost:3001/auth"  >
                <img src="/sales.png" alt="" />
                <button>Sign in SalesForce</button>
            </form>
        </div>
    )
}
export default Register