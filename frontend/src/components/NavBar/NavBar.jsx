import './NavBar.css'
import {Link} from 'react-router'
function NavBar(){
return(<div id ="nav-bar">
    <Link to = "/" className = "link" id = "company-name"><h1>Song Dynasty</h1></Link> 
    <ul id = "nav-links">
    <Link to = "/tax" className = "link">Tax Filing</Link>
    <li>Refund Options</li>
    <Link to = "/pricing" className = "link">Pricing</Link>
    <li>Search</li>
    <Link id = "account-btn" to = "/register" className = "link">Sign Up/Sign In</Link>
</ul>
</div>)
}

export default NavBar


{/* <Link to = "/" className = "link">Song Dynasty</Link> */}