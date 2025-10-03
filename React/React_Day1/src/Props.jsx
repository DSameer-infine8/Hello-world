import "./Props.css"


function Pro({ userName }) {
  return (
    <div className="intro">
      <h1 style={{ backgroundColor: "orange" }}>
        Hello {userName.toUpperCase()}, My Name is Sameer
      </h1>
      <h2 style={{ backgroundColor: "white", color: "blue" }}>
        MERN Full-Stack Developer
      </h2>
      <h1 style={{ backgroundColor: "green" }}> Started React</h1>
    </div>
  );
}

export default Pro;
