import "./Product.css";

function Product({ product, features ,desc="Good Product" }) {
    features=['Good Display',"i9 13thGen Processor","Great Grip","Good Fragrence"]
    let lists = features.map((feature)=>
    <li>{feature}</li>)
  return (
    <div className="pro">
      <h2>{product}</h2>
      <h3>{desc}</h3>
      <div className="prizes">
        <p className="oldPrize">35,000</p>
        <p className="newPrize">28,000</p>
      </div>
      <p className="details">{lists}</p>
    </div>
  );
}

export default Product;
