import { useRef } from "react";
import Hero from '../Hero'
import TaxCard from "./TaxCard";

function Taxes() {
  return (
    <>
      <Hero title = {"File Taxes Your Way"} content = {"Filing Taxes has never been easier! Choose one of our selections to get started:"}/>
      <TaxCard/>
    </>
  );
}
export default Taxes;

// offerings include: Individual taxes, business taxes.
//
