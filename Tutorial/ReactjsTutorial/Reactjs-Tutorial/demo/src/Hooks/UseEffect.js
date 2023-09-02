/*
UseEffect
----------
* to perform side effects in your components.
* examples - fetching data, directly updating the DOM, and timers.

Syntax : 
--------
useEffect(<function>, <dependency>) 
                        optional
Conditions
----------
1. No dependency passed:
useEffect(() => {
  //Runs on every render
});

*/

import { useState, useEffect } from 'react';

function Timer() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount((count)=>count+1);
        }, 1000);
    })

    return (
        <div>
            <h1>Timer : {count }</h1>
        </div>
    )
}

export default Timer;