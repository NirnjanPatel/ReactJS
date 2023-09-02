import React from 'react';

export default function Football(){
    const shoot = ()=>{
        alert("Great shot !");
    }
    const shoot2=(a)=>{
        alert(a);
    }
    const shoot3=(a,b)=>{
        alert(b.type);
    }
    return(
        <div>
            <button onClick={shoot}>Take the shot !</button>
            <br/>
            <br/>
            <button onClick={()=>shoot2("Goal")}>Take the arg shot !</button>
            <br/>
            <br/>
            <button onClick={(events)=>{shoot3("Goal3",events)}}>Take-Events-Args-shot</button>
        </div>
    )
}
