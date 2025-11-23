import './Footer.css'
import {Link} from 'react-router'
function Footer(){
return(
    <footer>
        <ul>
            <Link className = "footer-link" to = "/resources">Resources</Link>
            <Link className = "footer-link" to = "/about">About Us</Link>
            <Link className = "footer-link" to = "/employee-login">Employee Login</Link>
            <p>&copy;Song Dynasty Corp.</p>
        </ul>
    </footer>
)
}

export default Footer