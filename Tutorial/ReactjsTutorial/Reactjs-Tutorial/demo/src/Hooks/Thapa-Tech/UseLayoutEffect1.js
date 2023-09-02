/*

UseLayoutEffect
---------------
it runs synchronously after a render but before the screen is updated

UseEffect
---------------
it runs asynchronously after a render is painted to screen.

*/

import React, { useEffect, useLayoutEffect } from 'react'



const UseLayoutEffect1 = () => {

    useEffect(() => {
        console.log("First useEffect");
    }, [])
    
    useLayoutEffect(() => { // runs first
        console.log("Second useEffect");
    }, [])
        useLayoutEffect(() => { // runs first
        console.log("Fourth useEffect");
    }, [])
    
    useEffect(() => {
        console.log("Third useEffect");
    }, [])
    
    return (
        <div>
          lkooo
        </div>
    );
};

export default UseLayoutEffect1; 