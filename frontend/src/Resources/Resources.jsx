import Hero from '../components/Hero'
import Article from './Article'
import './Resources.css'
function Resources(){

return(<>
<Hero title = {"Resources"} content = {""}></Hero>
<Article />
<div id = "article-listing">
<div id = "featured">Featured Article</div>
<div>Other Articles</div>
</div>
</>)
}

export default Resources