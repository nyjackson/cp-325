import Hero from "../Hero";
import "./Taxes.css"
function Pricing() {
  return (
    <div id="pricing">
      <Hero title={"Pricing"}/>
      <h2>Tax Review</h2>
      <div className="price-gallery">
         <div className="tax-offering">
          <h1>Individual</h1>
          <h2>Base Price: $50</h2>
        </div>
         <div className="tax-offering">
          <h1>Married Filed Jointly</h1>
          <h2>Base Price: $100</h2>
        </div>
         <div className="tax-offering">
          <h1>Married Filed Separately</h1>
          <h2>Base Price: $150</h2>
        </div>
      </div>
      <h2>Expert Filing</h2>
      <div className="price-gallery">
         <div className="tax-offering">
          <h1>Individual</h1>
          <h2>Base Price: $80</h2>
        </div>
         <div className="tax-offering">
          <h1>Married Filed Jointly</h1>
          <h2>Base Price: $160</h2>
        </div>
         <div className="tax-offering">
          <h1>Married Filed Separately</h1>
          <h2>Base Price: $180</h2>
        </div>
      </div>
      <h2>Other Services</h2>
      <div className = "price-gallery">
         <div className="tax-offering service-offering">
          <h1>Notary</h1>
          <h2>$3/signature</h2>
        </div>
         <div className="tax-offering service-offering">
          <h1>Tax Advice</h1>
          <h2>$50/hr</h2>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
