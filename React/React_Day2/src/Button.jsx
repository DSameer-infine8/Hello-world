function doSomething(){
    console.log("Button was clicked");
}

function mouseHover() {
  console.log("Mouse just passed by");
}

export default function Button(){

    return (
        <>
        <button onClick={doSomething}>Click Me...!</button>
        <p onMouseOver={mouseHover}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aspernatur quod, vero natus magni est sapiente nobis deleniti numquam, esse, in voluptates cumque? Corporis aliquid accusamus nulla aperiam cumque tempora!</p>
        </>
    );

}