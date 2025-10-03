function Tables({ num }) {
  let answers = [];
  for (let i = 1; i <= 10; i++) {
    answers.push(num * i);
  }
  let i = 1;
  let list = answers.map((answer) => (
    <p>
      {num}*{i++}={answer}
    </p>
  ));
  return (
    <div style={{ backgroundColor: "black", marginTop: "20px", borderRadius:'2rem', border:'3px solid white' }}>
      <h2>{list}</h2>
    </div>
  );
}

export default Tables;
