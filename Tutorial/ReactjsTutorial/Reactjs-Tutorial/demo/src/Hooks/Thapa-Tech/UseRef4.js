// Thapa technical
// UseRef
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const UseRef4 = () => {
  const [userInput, setUserInput] = useState("");
    const [count, setCount] = useState(0);

    const handleChange = (event) => {
        setUserInput(event.target.value);
        setCount(count + 1);
}

    return (
        <div>
            <h1>Helloo</h1>
            <input
                type="text"
                value={userInput}
                onChange={handleChange}
            />
            <h1>Render Count: {count}</h1>
        </div>
    );
};
export default UseRef4;