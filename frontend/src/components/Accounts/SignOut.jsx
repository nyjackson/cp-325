import { BACKEND_URL } from "../../App";
import SignUp from "./SignUp";
import {Link} from 'react-router'
import {useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { setUser, setLoginStatus, selectLoginStatus } from "./accountSlice";
import Account from "./Account";

function SignOut(){

}

export default SignOut