import React from 'react'
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'

function AuthScreen() {
  return (
    <>

    <div>AuthScreen</div>
    <Register/>
    <hr/>
    <div>Login</div>
    <Login/>


    </>
  )
}

export default AuthScreen