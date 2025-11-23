import './NavBar.css'
import {useSelector} from 'react-redux'
import {Link} from 'react-router'
import { selectLoginStatus, setLoginStatus, setUser } from '../Accounts/accountSlice'
import { useEffect } from 'react'
function NavBar(){
const loginStatus = useSelector(selectLoginStatus)
useEffect(()=> {}, [loginStatus])

async function handleSearch(e){
    
}


return(<div id ="nav-bar">
    <Link to = "/" className = "link" id = "company-name">Song Dynasty</Link> 
    <ul id = "nav-links">
    <Link to = "/tax" className = "link">Tax Filing</Link>
    <Link to = "/pricing" className = "link">Pricing</Link>
    <Link to = "/resources" className = "link">Resources</Link>
    <Link to = "/about" className = "link">About Us</Link>
    <Link to = "/" className = "link">Search</Link> {/** Adjust link, vision: on click turn into a responsive search bar */}
    {loginStatus ? <Link id = "account-btn" to = "/account" className = "link">Account</Link> : ''}
    {!loginStatus ? <Link id = "account-btn" to = "/register" className = "link">Sign Up/Sign In</Link> : 
    <Link id = "account-btn" className = "link" to = "/signout">Sign Out</Link>}
    
</ul>
</div>)
}

export default NavBar


{/* <Link to = "/" className = "link">Song Dynasty</Link> */}
// const navbarRegular = ["Tax Filing", "Pricing", "Resources", "About", "Search"]
// const navbarAccount = ["Tax Filing, "Appointments", "Resources", "Search"]