import {Routes, Route} from 'react-router'
import 'dotenv'
import './App.css'

import NavBar from './components/NavBar/NavBar'
import Homepage from './components/Home/Homepage'
import Footer from './components/Footer/Footer'
import Taxes from './components/Taxes/Taxes'
import Pricing from './components/Pricing'
import SignUp from './components/Accounts/SignUp'
import SignIn from './components/Accounts/SignIn'
import Account from './components/Accounts/Account'
import Resources from './Resources/Resources'
import SignOut from './components/Accounts/SignOut'
import About from './components/About'
import EmployeeLogin from './components/Accounts/EmployeeLogin'

export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
//console.log(backendURL)

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path = "/" element = {<Homepage/>}/>
        <Route path = "/tax" element = {<Taxes/>}/>
        <Route path = "/pricing" element = {<Pricing/>}/>
        <Route path = "/resources" element = {<Resources />}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/employee-login" element = {<EmployeeLogin />}/>
        <Route path = "/register" element = {<SignUp />}/>
        <Route path = "/login" element = {<SignIn />}/>
        <Route path = "/account" element = {<Account />}/>
        <Route path = "/signout" element = {<SignOut />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
