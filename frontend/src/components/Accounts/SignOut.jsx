import SignIn from "./SignIn";
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { setUser, setLoginStatus } from "../slices/accountSlice";

function SignOut(){
    const dispatch = useDispatch()
useEffect(() => {
    dispatch(setUser({}))
    dispatch(setLoginStatus(false))
    localStorage.removeItem("token")
}, [])
return (
    <>
    <h2>Successfully Signed Out.</h2> {/**Message Box here */}
    <SignIn/>
    </>
)
}

export default SignOut