import { BACKEND_URL } from "../../App";
import SignUp from "./SignUp";
import {Link} from 'react-router'
import {useRef} from 'react'


function SignIn() {
  const formRef = useRef()

  async function handleLogin(e) {
    e.preventDefault()
    const user = {
      username: formRef.current[0].value,
      password: formRef.current[1].value
    }
    try{
      const connection = await fetch(BACKEND_URL+"/account/login/client", {method: "POST", body: JSON.stringify(user), headers: {'Content-Type':'application/json'}})
      const result = await connection.json()
      //console.log("Handle Login", result)
      return //Successful Login
    }
    catch(e){
      console.log(e)
      // Invalid Login, Try Again
    }
  }
  return (
  <>
  <h1>Client Sign In</h1>
  <form ref = {formRef} onSubmit = {handleLogin}>
        <label htmlFor="uname">Username, Email, or Phone Number: </label>
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
  </form>
    <button onClick = {handleLogin}>Sign In</button>
  <Link to = "/register" element = {<SignUp />}>Don't have an account?</Link>
  </>);
}

export default SignIn;
