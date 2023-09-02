// facing issue in this practicle

import { useState, useEffect } from 'react';

function Timer() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
        document.getElementById('h1').innerHTML = count;
    })

    return (
        <div>
            <button type='button' onClick={Timer} >Start Timer..!</button>
            <h1 id='h1'>Timer : </h1>
        </div>
    )
}

export default Timer;