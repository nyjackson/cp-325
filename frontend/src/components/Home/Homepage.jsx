import './Homepage.css'
import Hero from '../Hero';
import {useEffect, useState} from 'react'
import InfoCard from './InfoCard';
import './Calendar.css'
import AppointmentForm from './AppointmentForm';

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
      <Hero title = {"15% off your first return!"} content = {"File and submit your tax return with us this week to qualify."}/>
      <div id = "appt">
      <InfoCard dayCount = {countTilTaxSeason}/>
      <AppointmentForm />
      </div>
      <Hero title = {""} content = {"From document collection to return result, Tax Dynasty will be there to reach your financial goals and complete your return."} />
    </div>
  );
}
export default Homepage;
