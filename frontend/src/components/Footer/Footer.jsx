import './Footer.css'
import {Link} from 'react-router'
function Footer(){
return(
    <footer>
        <ul>
            <li>File Your Taxes</li>
            <li>Resources</li>
            <li>About Us</li>
            <Link className = "footer-link" to = "/employee-login">Employee Login</Link>
            <p>&copy;Song Dynasty Corp.</p>
        </ul>
    </footer>
)
}

export default Footer