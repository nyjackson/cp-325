import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {editProfile, linkAccount, delinkAccount, test, selectUser, selectLoginStatus} from './accountSlice'
import Hero from '../Hero'
function Account(){
    const user = useSelector(selectUser)
    const loginStatus = useSelector(selectLoginStatus)
    const dispatch = useDispatch()
    
    useEffect(()=> {
        dispatch(test())
    },[])

console.log("In Account Component, getting user:", user)
const joinDate = user.joined_on.split('T')[0]
return(<>
{loginStatus ? (
    <div>
        <Hero title = {`Welcome Back ${user.first_name}!`}/>
        <h1>Account Details</h1>
        <p> <b>Email: </b>{user.contact?.email || user.personal_contact?.email ||""}</p>
        <p> <b>Phone: </b>{user.contact?.phone || user.personal_contact?.phone || ""}</p>
        <p> <b>Joined On: </b>{joinDate}</p>
        <p>{user.curr_appts?.length > 0 ? `Upcoming Appointments: ${user.curr_appts[0]}` : ''}</p>

    </div>

) : ''}
{
    user.access_role == 'Admin' ? console.log("Get All Employees and Clients") : ''
}

</>)
}

export default Account