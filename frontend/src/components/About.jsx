import Hero from "./Hero"
function About(){
    const values = ["Honesty", "Integrity", "Customer-Driven"]
return(
    
    <div>
        <Hero title = {"About Us"} content = {""}></Hero>
        <div id = "about">
            <div id = "intro">
            <img src = "https://images.pexels.com/photos/29296533/pexels-photo-29296533.jpeg" id = "president-img"></img>
            <p>Created in 2024, Diana Jackson grew tired of the delays and 
            red tape surronding H&R Block. As a tax preparer for 20 years, 
            she decided to create a company that focuses on what really matters, 
            its customers and employees. Song Dynasty is created with the mindset....</p>
            </div>
            
            <h2>Our Values</h2>
            <ul>
                {values.map((v)=> <li>{...v}</li>)}
            </ul>
        <h2>Meet The Team</h2>
        <div id = "team-gallery">

        </div>
            </div>
        
    </div>
)
}

export default About