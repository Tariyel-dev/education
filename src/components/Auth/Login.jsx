import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from '../../redux/actions/AuthAction';

export default function Login() {
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const {user} = useSelector((state) => state.user)

    let dispatch = useDispatch();
    const loginUser = () => {
        dispatch(LoginAction(email,password))
    }

    console.log(user);
  return (
    <>
    <input type="text" onChange={(e)=> setEmail(e.target.value)} placeholder='Email'/>
    <br />
        <input type="password" onChange={(e)=> setPassword(e.target.value)} placeholder='Password'/> <br />
        <button onClick={()=> loginUser()}>Login</button>



    
    
    </>
  )
}
