import React from "react";

export default function Test() {
     const x=5;
     let text = "goodbye";
     if(x<10){
        text = "Hello"
     }
     const myElement = <h1>{text}</h1>
  return (
    <div>
      {/* const var = <h1>react {5+5}</h1> */}
      {
        <ul>
          <li>Apple</li>
          <li>Mango</li>
          <li>Orange</li>
        </ul>
      }
    </div>
  );
}
