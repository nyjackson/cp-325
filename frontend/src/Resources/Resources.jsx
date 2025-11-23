import Hero from '../components/Hero'
import Article from './Article'
import './Resources.css'
function Resources(){

return(<>
<Hero title = {"Resources"} content = {""}></Hero>

<div id = "article-listing">
<div id = "featured"><Article /></div>
<ul id ="other-articles">
    <li>Dealing with Dependents</li>
    <li>Free Tax Filing Resources</li>
    <li>When To File: Maximizing Your Refund</li>
    </ul>
</div>
</>)
}

export default Resources