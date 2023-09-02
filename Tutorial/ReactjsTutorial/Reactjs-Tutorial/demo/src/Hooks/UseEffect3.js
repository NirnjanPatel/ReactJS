/*
Conditions
----------
3. Props or state values:
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);

*/

import { useState, useEffect } from 'react';

function UseEffect3() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => count * 2)
    }, [count]); // add the count variable here
    
    return (
        <div>
            <p>Count : {count}</p>
            <button type='button' onClick={() => setCount((count) => count + 1)} >+</button>
            <p>Calculation : { calculation}</p>
        </div>
    )
}

export default UseEffect3;