// import React, { useContext, useEffect } from 'react'
import React from "react"
// import { useLocation, useNavigate } from 'react-router-dom'
// import { AuthContext } from '../context/AuthContext'

const Login = () => {
  // const {login} = useContext(AuthContext)
  // const navigate = useNavigate();
  // const location = useLocation()

  // const from = location.state.from.pathname || "";
  // const handleClick = ()=>{
  //   login()
    // navigate(from, {replace:true})
  // }
  // useEffect(()=>{
  //  if(token){
  //   navigate(from, {replace:true})
  //  }
  // },[token])
  return (
    <div style={{margin:"auto",width:"80px"}}>
      <input type="email" placeholder='Enter Your Emailaddress' /><br />
      <input type="password" placeholder="Enter Your Password" /><br />
      <button >Login</button>
    </div>
  )
  }

export default Login