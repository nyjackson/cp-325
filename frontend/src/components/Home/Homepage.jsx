import './Homepage.css'
import Hero from '../Hero';
import {useEffect, useState} from 'react'
import { BACKEND_URL } from '../../App';

function Homepage() {
  const [empList, setEmpList] = useState([]) //temp

  async function displayAllInfo(){
      const response = await fetch(`${BACKEND_URL}/account`)
      const data = await response.json()
      setEmpList([...data.body.clients, ...data.body.employees])
      console.log("data")
  }


  console.log(empList)
  const listAll = empList.map((e) => <li>{e.username}</li>)
  return (
    <div id="home">
      <Hero title = {"PROMOTION"} content = {"Lorem Ipsum So You Don't Have To"}/>
      <h2>Wheels Up</h2>
      <button onClick = {displayAllInfo}>Display All</button>
      <ul>{listAll}</ul>
    </div>
  );
}
export default Homepage;
