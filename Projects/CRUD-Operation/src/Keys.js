import React from "react";

function Pow(prop){
    return <li>I am {prop.name} Ranger</li>
}

export default function Spd(){
    const rangers =[
        {id:1,ranger:'Red'},
        {id:2,ranger:'Blue'},
        {id:3,ranger:'Green'},
        {id:4,ranger:'Yellow'},
        {id:4,ranger:'Black'}
    ];

    return(
        <div>
            <h1>Spd power rangers are:</h1>
            <ul>
               {rangers.map((out)=><Pow key={out.id} name={out.ranger} />)}
            </ul>
        </div>
    )
}
