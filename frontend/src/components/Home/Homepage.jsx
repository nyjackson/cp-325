import './Homepage.css'
import Hero from '../Hero';
import {useEffect, useState} from 'react'
import { BACKEND_URL } from '../../App';

function Homepage() {

  return (
    <div id="home">
      <Hero title = {"PROMOTION"} content = {"Lorem Ipsum So You Don't Have To"}/>
      <h2>Wheels Up</h2>
      
    </div>
  );
}
export default Homepage;
