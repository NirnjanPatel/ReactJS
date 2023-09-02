/*

UseLayoutEffect
---------------
it runs synchronously after a render but before the screen is updated

UseEffect
---------------
it runs asynchronously after a render is painted to screen.

*/

import React, { useEffect, useLayoutEffect, useState } from 'react'



const UseLayoutEffect2 = () => {
 
    const [num, setNum] = useState(0);

    // useEffect(() => {
        // this will flicker our screen (value) first than update our data

    useLayoutEffect(() => {
        // to solve flickring of data we use useLayoutEffect hook
        // data automatically updates automatically in the background before execution so it will not flicker data
        if (num === 0) setNum(num + Math.random() * 10);
    }, [num]);
    return (
        <div>
            <p>Random Number : {num}</p>
          <button onClick={()=>setNum(0)} >Random Num</button>
        </div>
    );
};

export default UseLayoutEffect2; 