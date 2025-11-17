import './NavBar.css'
import {Link} from 'react-router'
function NavBar(){
return(<div id ="nav-bar">
    <Link to = "/" className = "link" id = "company-name"><h1>Song Dynasty</h1></Link> 
    <ul id = "nav-links">
    <li>Tax Filing</li>
    <li>Refund Options</li>
    <li>Pricing</li>
    <li>Search</li>
    <li>Sign Up/Sign In</li>
</ul>
</div>)
}

export default NavBar


{/* <Link to = "/" className = "link">Song Dynasty</Link> */}