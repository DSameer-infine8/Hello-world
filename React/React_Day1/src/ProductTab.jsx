import "./ProductTab.css";
import Product from "./Product";

function ProductTab() {
  return (
    <div className="proTab">
      <Product product="Phone" />
      <Product product="Laptop"/>
      <Product product="Pen" />
      <Product product="Soap" />
    </div>
  );
}

export default ProductTab;
