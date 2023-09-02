// We can embed JavaScript expressions in JSX by using curly braces:

import React from 'react'

function Conditionals1(props) {
    const cars = props.cars;
  return (
      <div>
          {/* <p>{props.cars[0]}</p>
          <p>{props.cars[1]}</p>
          <p>{props.cars[2]}</p> */}

          <h1>I will buy {cars.length} Cars very soon....!</h1>
          <h1>These are</h1> 
          {
              cars.map(
                  (cars) => {
                      return <h2>{cars}</h2>
                  }
              )}
    </div>
  )
}

export default Conditionals1;