import { useState } from "react";

export default function CountBtn(){
    let [count , setCount]= useState(0);

    function increase(){
        setCount(count+1);
    }

    return(
        <>
        <h3>Count={count}</h3>
        <button onClick={increase}>Click to Increase</button>
        </>
    )

}