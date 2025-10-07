function handleFormSubmit(e) {
  e.preventDefault();
  console.log("Form was now submitted");
}

export default function Form() {
  return (
    <>
      <h2>Forms</h2>
      <form onSubmit={handleFormSubmit}>
        <button>Submit</button>
      </form>
    </>
  );
}
