import { useRef } from "react";
import Hero from '../Hero'
import TaxCard from "./TaxCard";
import {Link} from 'react-router'

function Taxes() {
  return (
    <>
      <Hero title = {"File Taxes Your Way"} content = {"Filing Taxes has never been easier! Choose one of our selections to get started:"}/>
      <div id = "tax-options">
        <TaxCard title = {"File Yourself"} price = {"Free"} description = {"Using our provided resources, we offer you a free walkthrough on filing individual tax returns."}/>
        <TaxCard title = {"Tax Review"} price = {"$50+"} description = {"Complete your tax return and get it reviewed by a Tax Expert before submission."}/>
        <TaxCard title = {"Expertly File"} price = {"$80+"} description = {"Submit your individual or business tax forms and get your return completed by a Tax Expert."}/>
      </div>
      <div id = "tax-calc-banner">
      <h2>Not Sure Which Is Best? Take a quiz for a recommendation.</h2>
      <Link to = "/quiz" className = "tlink">Take The Quiz</Link>
      </div>
      <div id = "review-gallery">
        <h2>Reviews Here</h2>
      </div>
    </>
  );
}
export default Taxes;

// offerings include: Individual taxes, business taxes.
//
