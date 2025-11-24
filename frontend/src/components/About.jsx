import Hero from "./Hero";
import { BACKEND_URL } from "../App";

import owlImg from '../assets/eagle-owl-raptor-falconry-owl-53977.jpeg';
import snakeImg from '../assets/snake-rainbow-boa-reptile-scale.jpg';
import horseImg from '../assets/horse-arabs-stallion-ride-53114.jpeg';
import catImg from '../assets/pexels-photo-1437466.jpeg';
import dogImg from '../assets/pexels-photo-4587982.jpeg';
import presidentImg from '../assets/pexels-photo-29296533.jpeg';

function About() {
  const values = ["Honesty", "Quality", "Empathy"];
  return (
    <div>
      <Hero title={"About Us"} content={""}></Hero>
      <div id="about">
        <div id="intro">
          <img
            src={presidentImg}
            id="president-img"
          ></img>
          <p>
            Created in 2024, Mei Song grew tired of the delays and red tape
            surronding money-focused tax companies. As a tax preparer for 20 years, she decided to
            create a company that focuses on what really matters, its customers
            and employees. Tax Dynasty is created with the mindset of being a hub for tax preparation resources, while 
            serving as a cheaper option to tax preparation services.
          </p>
        </div>

        <h2>Our Values</h2>
        <ul className = "values">
          {values.map((v,i) => (
            <li key = {i}>{...v}</li>
          ))}
        </ul>
        <h2>Meet The Team</h2>
        <div id="team-gallery">
          <img
            src={catImg}
          ></img>
          <img
            src={dogImg}
          ></img>
          <img
            src={snakeImg}
          ></img>
          <img
            src={owlImg}
          ></img>
          <img
            src={horseImg}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default About;
