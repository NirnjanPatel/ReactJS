/*
Conditions
----------
2. An empty array:
useEffect(() => {
  //Runs only on the first render
}, []);

*/


import { useState, useEffect } from 'react';

function UseEffect2() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000); // add empty array here
    },[])

    return (
        <div>
            <h1 id='h1'>Timer :{count} </h1>
        </div>
    )
}

export default UseEffect2;