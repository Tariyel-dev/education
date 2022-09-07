import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { RegisterAction } from '../../redux/actions/AuthAction'
import { useDispatch} from 'react-redux'

function Register() {
    const [firstname,setFirstname] = useState()
    const [lastname,setLastname] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [confirmPassword,setConfirmPassword] = useState()

    useEffect(()=> {
        
    },[])

    let dispatch = useDispatch()

    const register = () => {
        dispatch(RegisterAction(firstname,lastname,email, password, confirmPassword))

    }

  return (
    <div>

        <input type="text"  onChange={(e)=> setFirstname(e.target.value)} placeholder='Firstname'/>
        <input type="text" onChange={(e)=> setLastname(e.target.value)} placeholder='Lastname'/>
        <input type="text" onChange={(e)=> setEmail(e.target.value)} placeholder='Email'/>
        <input type="password" onChange={(e)=> setPassword(e.target.value)} placeholder='Password'/>
        <input type="password"  onChange={(e)=> setConfirmPassword(e.target.value)}placeholder='ConfirmPassword'/>

        <button onClick={() => register()}>Register</button>

    </div>
  )
}

export default Register