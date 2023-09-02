import React from 'react'
// using if else
// const ReducerFunction1 = (state, action) => {
//     if (action.type === "INC") {
//         return (state = state + 1);
//     }
//     else if (action.type === "DEC") {
//         return (state = state - 1);
//     }
//     else return state;
// }

// using switch case
const ReducerFunction1 = (state, action) => {
    switch (action.type) {
        case "INC":
            return (state = state + 1);

        case "DEC":
            let newNum = 0;
            state >= 1 ? (newNum = state - 1) : (newNum = 0);
            return newNum;
        default:
            return state;
    }
}
export default ReducerFunction1;