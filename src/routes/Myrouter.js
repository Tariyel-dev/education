import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthScreen from '../pages/AuthScreen'
import HomeScreen from '../pages/HomeScreen'

function Myrouter() {
  return (
    <Routes>
        <Route path = '/' element = {<HomeScreen/>}/>
        <Route path='/auth' element = {<AuthScreen/>}/>
    </Routes>
  )
}

export default Myrouter