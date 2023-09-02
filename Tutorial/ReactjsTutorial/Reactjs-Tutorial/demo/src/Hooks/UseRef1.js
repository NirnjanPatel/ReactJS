// not working
/*
UseRef Hook
-----------
to create a mutable variable which will not re-render components
* to directly create a reference to the DOM element in the functional component.
* UseRef returns an object, doesn't cause components to re-render, and it's used to reference DOM elements.

Used in
-------
1. Does Not Cause Re-renders
2. Accessing DOM Elements
3. Tracking State Changes

*/

import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const UseRef1 = () => {
  const [userInput, setUserInput] = useState("");
  // const [count, setCount] = useState(0);
  
  const count = useRef(0);
  // console.log(count);

  useEffect(() => {
    // setCount(count + 1);
    count.current = count.current + 1;
})

    return (
        <div>
            <h1>Helloo</h1>
            <input
                type="text"
                value={userInput}
                onChange={(event)=>setUserInput(event.target.value)}
            />
            <h1>Render Count: {count.current}</h1>
        </div>
    );
};
export default UseRef1;