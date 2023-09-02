import React from "react";

export default function Bag(props){
    const comp = props.comp;
    return(
        <div>
            <h1>Garage</h1>
            {
                comp.length > 0 && <h2>You have {comp.length} things in bags</h2>  // conditionals operators
            }
        </div>
    )
}