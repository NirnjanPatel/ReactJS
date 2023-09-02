// Thapa Technical YouTube tutorial
  // when we want to render UseEffect on the changes of this variable's state

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";
import styled from "styled-components";

const UseEffect6 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = count;
  }, [count]); // add that variable here
  
  return (
    <>
      <Wrapper>
        <div className="container">
          <button onClick={() => setCount(count + 1)}>
            <BiPlusMedical className="icon" />
          </button>
          <h1>{count}</h1>
          <button
            onClick={() => (count === 0 ? setCount(0) : setCount(count - 1))}>
            <FaMinus className="icon minus_icon" />
          </button>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4.8rem;
  }
  .icon {
    font-size: 2rem;
  }

  h1 {
    font-size: 5.4rem;
    color: #007bff;
  }
`;

export default UseEffect6;