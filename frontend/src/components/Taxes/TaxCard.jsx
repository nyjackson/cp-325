import "./Taxes.css"

function TaxCard({title, price, description}){
return(
<div className = "tax-offering">
    <h1>{title}</h1>
    <h2>{price}</h2>
    <p>{description}</p>
    <button className = "tax-btn">Get Started</button>
</div>)
}

export default TaxCard