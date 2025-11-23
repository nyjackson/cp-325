import Hero from "./Hero";
import { BACKEND_URL } from "../App";

function About() {
  const values = ["Honesty", "Integrity", "Customer-Driven"];
  return (
    <div>
      <Hero title={"About Us"} content={""}></Hero>
      <div id="about">
        <div id="intro">
          <img
            src="https://images.pexels.com/photos/29296533/pexels-photo-29296533.jpeg"
            id="president-img"
          ></img>
          <p>
            Created in 2024, Mei Song grew tired of the delays and red tape
            surronding money-focused tax companies. As a tax preparer for 20 years, she decided to
            create a company that focuses on what really matters, its customers
            and employees. Song Dynasty is created with the mindset....
          </p>
        </div>

        <h2>Our Values</h2>
        <ul>
          {values.map((v,i) => (
            <li key = {i}>{...v}</li>
          ))}
        </ul>
        <h2>Meet The Team</h2>
        <div id="team-gallery">
          <img
            src="https://images.pexels.com/photos/1437466/pexels-photo-1437466.jpeg"
          ></img>
          <img
            src="https://images.pexels.com/photos/4587982/pexels-photo-4587982.jpeg"
          ></img>
          <img
            src="https://images.pexels.com/photos/34426/snake-rainbow-boa-reptile-scale.jpg"
          ></img>
          <img
            src="https://images.pexels.com/photos/53977/eagle-owl-raptor-falconry-owl-53977.jpeg"
          ></img>
          <img
            src="https://images.pexels.com/photos/53114/horse-arabs-stallion-ride-53114.jpeg"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default About;
