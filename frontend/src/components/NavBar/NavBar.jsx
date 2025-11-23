import './NavBar.css'
import {useSelector} from 'react-redux'
import {Link} from 'react-router'
import { selectLoginStatus } from '../Accounts/accountSlice'
function NavBar(){
const loginStatus = useSelector(selectLoginStatus)
return(<div id ="nav-bar">
    <Link to = "/" className = "link" id = "company-name">Song Dynasty</Link> 
    <ul id = "nav-links">
    <Link to = "/tax" className = "link">Tax Filing</Link>
    <Link to = "/pricing" className = "link">Pricing</Link>
    <Link to = "/resources" className = "link">Resources</Link>
    <li>Search</li>
    {loginStatus ? <Link id = "account-btn" to = "/account" className = "link">Account</Link> : ''}
    {!loginStatus ? <Link id = "account-btn" to = "/register" className = "link">Sign Up/Sign In</Link> : 
    <Link id = "account-btn" to = "/sign-out" className = "link">Sign Out</Link>}
    
</ul>
</div>)
}

export default NavBar


{/* <Link to = "/" className = "link">Song Dynasty</Link> */}
// const navbarRegular = ["Tax Filing", "Pricing", "Resources", "About", "Search"]
// const navbarAccount = ["Tax Filing, "Appointments", "Resources", "Search"]