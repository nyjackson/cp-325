import { BACKEND_URL } from "../../App";
import SignIn from "./SignIn";
import {Link} from 'react-router'
import {useRef, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { setUser, setLoginStatus, selectLoginStatus } from "./accountSlice";
import Account from "./Account";

function SignOut(){
    const dispatch = useDispatch()
useEffect(() => {
    dispatch(setUser({}))
    dispatch(setLoginStatus(false))
}, [])
return (
    <>
    <h2>Successfully Signed Out.</h2> {/**Message Box here */}
    <SignIn/>
    </>
)
}

export default SignOut