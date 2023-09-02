/*
Effect Cleanup
--------------
Some effects require cleanup to reduce memory leaks.
for ex. Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.
T0 achieve this include a return function at the end of the useEffect Hook.

*/

// For ex. Clean up the timer at the end of the useEffect Hook:

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function UseEffect4() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (<h1>I've rendered {count} times!</h1>);
}

export default UseEffect4;