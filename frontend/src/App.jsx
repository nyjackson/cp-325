import { useState } from 'react'
import {Routes, Route} from 'react-router'
import 'dotenv'
import './App.css'

import NavBar from './components/NavBar/NavBar'
import Homepage from './components/Home/Homepage'
import Footer from './components/Footer/Footer'
import Taxes from './components/Taxes/Taxes'
import Pricing from './components/Pricing'
import SignUp from './components/Account/SignUp'
import SignIn from './components/Account/SignIn'
const backendURL = import.meta.env.VITE_BACKEND_URL
//console.log(backendURL)

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path = "/" element = {<Homepage/>}/>
        <Route path = "/tax" element = {<Taxes/>}/>
        <Route path = "/pricing" element = {<Pricing/>}/>
        <Route path = "/register" element = {<SignUp />}/>
        <Route path = "/login" element = {<SignIn />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
