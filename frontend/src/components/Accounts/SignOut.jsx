import { BACKEND_URL } from "../../App";
import SignUp from "./SignUp";
import {Link} from 'react-router'
import {useRef, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { setUser, setLoginStatus, selectLoginStatus } from "./accountSlice";
import Account from "./Account";

function SignOut(){
useEffect(() => {
    setUser({})
    setLoginStatus(false)
}, [])
return (<h1>Attempting Sign Out</h1>)
}

export default SignOut