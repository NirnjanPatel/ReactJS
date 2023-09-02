import React from "react";

function missedGoal(){
    return <h1>Missed!</h1>;
}
function madeGoal(){
    return <h1>Goal!</h1>;
}
export default function Goal(props){
    const isGoal = props.isGoal;
    // if(isGoal){
    //     return <madeGoal />  // If-else conditionals
    // }
    // return <madeGoal />

    // Ternary operators
    return(
        <div>
            {isGoal?<madeGoal />:<missedGoal />}
        </div>
    )

}