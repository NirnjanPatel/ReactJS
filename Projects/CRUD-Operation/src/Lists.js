import React from "react";
function Students(prop){
    return <li>I am {prop.names}</li>
}
export default function School(){
    const Boys = ['tarun','aman','ram','shivam'];
    return(
        <div>
            <h1>Boys are here</h1>
            <ul>
                {Boys.map((Boy)=><Students names = {Boy}/>)}
            </ul>
        </div>
    )
} 