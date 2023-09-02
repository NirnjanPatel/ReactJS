import React, { useEffect,useState } from 'react'

const Useeffects = () => {

    const[count,setCount]= useState(0);

    useEffect(()=>{
        document.title = `Home(${count})`
    })

  return (
    <div>
    <h1>{count}😋</h1>
    <button class='btn' onClick={
        ()=>{setCount(count+1)}
    }>Click me😅 </button>
    </div>
  )
}

export default Useeffects