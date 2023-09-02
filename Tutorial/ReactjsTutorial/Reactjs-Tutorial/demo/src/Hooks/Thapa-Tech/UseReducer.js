/* 
UseReducer - * is similar to the useState hook
* useReducer is an additional Hook for managing more complex state logic.
* used in complex and big projects
* it has an reducer function which will be invoked
* is more powerful and more efficient than UseState

Syntax :

const [state,dispatch] = useReducer  (reducer   ,   initial_value)
                                    state & action


*/

import React, { useState } from 'react'
import { useReducer } from 'react';
import styled from 'styled-components';
import { BiPlusMedical } from 'react-icons/bi';
import { FaMinus } from 'react-icons/fa';
import reducer1 from '../ReducerFunction1';
// import reducer2 from './ReducerFunction2';

const initialValue = 0;

function UseReducer() {
    // const [count, setCount] = useState(0);
    const [count, dispatch] = useReducer(reducer1,initialValue)
    // const [count, dispatch] = useReducer(reducer2,initialValue)

    return (
        <>
            <Wrapper>
                <h2>UseReducer Hook</h2>
                <div className='container' >
                    <button onClick={()=>dispatch({type:"INC"})}>
                        <BiPlusMedical className='icon' />
                    </button>
                    <h1>{count}</h1>
                    <button onClick={()=>dispatch({type:"DEC"})} >
                        <FaMinus className='icon minus_icon' />
                    </button>
                </div>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.section
`
    .container {
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4.8rem;
  }
  .icon {
    font-size: 2rem;
  }

  h1 {
    font-size: 5.4rem;
    color: #007bff;
  }
  `;

export default UseReducer;