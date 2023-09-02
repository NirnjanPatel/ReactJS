// Target DOM directly using useRef hook.

import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const UseRef2 = () => {
  const [userInput, setUserInput] = useState("");
  // const [count, setCount] = useState(0);
  
  const inputRef = useRef();

  const changeBorder = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "#007bff";
  };

    return (
        <div>
            <h1>Helloo</h1>
            <input
                type="text"
                ref={inputRef}
        />
      <button onClick={changeBorder} >Submit Form</button>
      </div>
    );
};
export default UseRef2;