import SignIn from "./SignIn";
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { setUser, setLoginStatus, selectUser } from "../slices/accountSlice";
import { displayMessageStatus, setActive, signupSuccess } from "../slices/errorSlice";
import MessageBox from "../MessageBox";

function SignOut(){
    const dispatch = useDispatch()
    const showMessage = useSelector(displayMessageStatus)
    
useEffect(() => {
    dispatch(setActive(false))
    dispatch(setUser({}))
    dispatch(setLoginStatus(false))
    localStorage.removeItem("token")
    handleDispatch()
}, [displayMessageStatus])

function handleDispatch(){
    dispatch(signupSuccess("Successfully Signed Out."))
    dispatch(setActive(true))
}
return (
    <>
    <SignIn/>
    </>
)
}

export default SignOut