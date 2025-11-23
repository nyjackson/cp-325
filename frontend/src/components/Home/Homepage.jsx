import './Homepage.css'
import Hero from '../Hero';
import {useEffect, useState} from 'react'
import { BACKEND_URL } from '../../App';

function Homepage() {
const countdownDate = new Date("Jan 27, 2026 00:00:00").getTime()
const [countTilTaxSeason, setCount] = useState("")
useEffect(() => {
setInterval(()=>{
  const now = new Date().getTime()
  const dist = countdownDate - now
  let days = Math.floor(dist / (1000 * 60 * 60 * 24))
  setCount(days)
})
},[countTilTaxSeason])
  return (
    <div id="home">
      <Hero title = {"15% off your first return!"} content = {"File and submit your return with us today to qualify."}/>
      <div>
        <h2>Days Until Tax Season 1/27:{countTilTaxSeason} days</h2>
        <h3>Do you have all your tax forms?</h3>
      </div>
      
    </div>
  );
}
export default Homepage;
