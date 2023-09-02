 // ClearUp in UseEffect Hook

import { useState, useEffect } from "react";
import styled from "styled-components";

const UseEffect8 = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);
    // console.log(window.screen.width);

    const currentScreenWidth = () => {
        setWidthCount(() => window.innerWidth)
    };
        
    useEffect(() => {
        window.addEventListener("resize", currentScreenWidth);
        return () => { window.removeEventListener("resize", currentScreenWidth) };
})

    return (
        <>
            <Wrapper>
                <div className="container">
                    <h1>The size of window is <span> {widthCount} </span></h1>
                </div>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.section`
  .container {
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4.8rem;
  }
  .icon {
    font-size: 2rem;
  }

  h1 {
    font-size: 4.4rem;
    color: #007bff;
  }
`;

export default UseEffect8;