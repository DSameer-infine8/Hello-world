import "./App.css";
import Button from "./Button";
import Form from "./Form";
import CountBtn from "./Hooks1";

function App() {
  return (
    <>
      <h1>Welcome to React Day-2 Learning</h1>
      <ol>
        <li>
          <Button />
        </li>
        <br />
        <hr />
        <li>
          <Form />
        </li>
        <br />
        <hr />
        <li>
          <CountBtn />
        </li>
      </ol>
    </>
  );
}

export default App;
