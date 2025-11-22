import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {editProfile, linkAccount, delinkAccount, test, selectUser, selectLoginStatus} from './accountSlice'
import Hero from '../Hero'
function Account(){
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    
    useEffect(()=> {
        dispatch(test())
    },[])

console.log("In Account Component, getting user:", user)
return(<>
{!selectLoginStatus ? <Hero title = {`Welcome Back!`}/> : ''}

</>)
}

export default Account