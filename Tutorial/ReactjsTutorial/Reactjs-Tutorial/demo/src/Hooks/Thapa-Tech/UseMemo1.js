/*
useMemo
--------
used to increase performance of our app/web
Syntax : 
                    array depen.
useMemo(callback ,  [ dependency ] )
        return value
*/

import React, { useState } from 'react'

const UseMemo1 = () => {
  const [myNum, setMyNum] = useState(0);
  const [show, setshow] = useState(false);

  const getValue = () => {
    return setMyNum(myNum + 1);
  }
  const countNumber = (num) => {
    console.log("Num = " + num);
    for (let i = 0; i <= 100000000; i++){ }
    return num;
  }

  const CheckData = () => {
    return countNumber(myNum);
  }

  return (
      <div>
      <h1>UseMemo1 Hook</h1>
      <button onClick={getValue} style={{ backgroundColor: "#007bff" }} >Counter</button>
      <h3>New Num : {<CheckData />}</h3>
      <button onClick={() => setshow(!show)} >
        {show?"You clicked me":"Click me plz"}
      </button>
    </div>
  )
}

export default UseMemo1;