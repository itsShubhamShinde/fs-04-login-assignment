import React from 'react'
import './Loginpage.css'
import {myContext} from './DataProvider'
import { useContext, useState } from 'react'

const Login = () => {
  const {setLogin , setInput, input} = useContext(myContext)
  const [pass, setPass] = useState("")
  
  const checkfnc = ()=>{
    console.log(input)
    if((input === "Shubham" && pass === "pass@123") || (input === "admin" && pass === "admin@123")){
      console.log(input)
      setLogin(true);
    }else{
      alert("Fill proper credential..!")
    }
  }
  return (
    <div className='LoginPage'>
         <h1>Login Page</h1>
        <label>User Name :
        <input type="text" placeholder='Enter Name' onChange={(e)=>{setInput(e.target.value)}}/>
        </label>
        <label> Password : 
        <input type="password" placeholder='Password' onChange={(e)=>{setPass(e.target.value)}}/>
        </label>
        <button onClick={()=>{checkfnc()}} >Login</button>
    </div>
  )
}

export default Login;