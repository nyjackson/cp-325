import { BACKEND_URL } from "../../App";
import SignUp from "./SignUp";
import {Link} from 'react-router'
import {useEffect, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { setUser, setLoginStatus, selectLoginStatus } from "../slices/accountSlice";
import Account from "./Account";
import MessageBox from "../MessageBox";
import { displayMessageStatus, setActive, makeError } from "../slices/errorSlice";

function SignIn() {
  
  const formRef = useRef()
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(selectLoginStatus)
  const showMessage = useSelector(displayMessageStatus)
  useEffect(() => {}, [])
  async function handleLogin(e) {
    dispatch(setActive(false))
    e.preventDefault()
    const user = {
      username: formRef.current[0].value,
      password: formRef.current[1].value
    }
    try{
      const connection = await fetch(BACKEND_URL+"/account/login/client", {method: "POST", body: JSON.stringify(user), headers: {'Content-Type':'application/json'}})
      const result = await connection.json()
      console.log("Handle Login FrontEnd", result)
      localStorage.setItem("token",result.token)
      
      dispatch(setUser({...result.user[0]}))
      dispatch(setLoginStatus(true))
      return  //Successful Login
    }
    catch(e){
      console.log(e)
      dispatch(setActive(true))
      dispatch(makeError("Invalid Credentials. Review username and password and try again."))
    }
  }
  return (
  <>
  {showMessage ? <MessageBox />: ''}
  {!isLoggedIn ? <form ref = {formRef} onSubmit = {handleLogin} id = "sign-in">
    <h1>Client Sign In</h1>
        <label htmlFor="uname">Username: </label>
        <input
          type="text"
          id="uname"
          name="lname"
          autoComplete="username"
        />
        <br></br>

        <label htmlFor="pass">Password: </label>
        <input
          type="password"
          className="pass"
          name="password"
          autoComplete="password"
        />
        <br></br>
        <button className = "tax-btn">Sign In</button> 
        <Link to = "/register" element = {<SignUp />}>Don't have an account?</Link>
  </form> : ''}
    
    {isLoggedIn ? <Account/> : ''}
  
  </>);
}

export default SignIn;


//dispatch(setLoginStatus(true))