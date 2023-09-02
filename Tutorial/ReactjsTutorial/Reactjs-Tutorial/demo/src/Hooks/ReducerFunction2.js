import React from 'react'

const ReducerFunction2 = (state, action) => {
    if (action.type === "INC") {
        return (state = state + 1);
    }
    else if (action.type === "DEC") {
        // return (state = state - 1);
        let newNum = 0;
        state >= 1 ? (newNum = state - 1) : (newNum = 0);
        return newNum;
    }
    else return state;
}

export default ReducerFunction2;