import "./App.css";
import Pro from "./Props";
import Tables from "./Tables";
import Hello from "./Hello";
import ProductTab from "./ProductTab";

function App() {
  return (
    <>
      <Pro userName="John" />
      <Tables num={6} />
      <Hello user="Sam" color="orange" />
      <Hello user="Sameer" color="red" />
      <Hello user="Appu" color="yellow" />
      <Hello user="Sara" color="purple" />
      <ProductTab />
    </>
  );
}

export default App;
