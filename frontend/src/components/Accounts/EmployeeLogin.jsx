import { BACKEND_URL } from "../../App";
import Account from "./Account";
import {useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { selectLoginStatus, setUser, setLoginStatus } from "../slices/accountSlice";
function EmployeeLogin(){

  const formRef = useRef()
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(selectLoginStatus)

  async function handleLogin(e) {
    e.preventDefault()
    const user = {
      username: formRef.current[0].value,
      password: formRef.current[1].value
    }
    console.log(user)
    try{
      const connection = await fetch(BACKEND_URL +"/account/login/employee", {method: "POST", body: JSON.stringify(user), headers: {'Content-Type':'application/json'}})
      const result = await connection.json()
      console.log("Handle Login FrontEnd", result)
      localStorage.setItem("token",result.token)
      dispatch(setUser({...result.user[0]}))
      dispatch(setLoginStatus(true))
      return  //Successful Login
    }
    catch(e){
      console.log(e)
    }
  }
  return (
  <>
  
  {!isLoggedIn ? <form ref = {formRef} onSubmit = {handleLogin} id = "sign-in">
    <h1>Employee Sign In</h1>
        <label htmlFor="uname">Username or Email: </label>
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
        <button>Sign In</button> 
  </form> : ''}

    {isLoggedIn ? <Account/> : ''}
  
  </>);
}

export default EmployeeLogin