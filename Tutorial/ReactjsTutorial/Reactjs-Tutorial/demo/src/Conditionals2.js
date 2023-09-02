// We can embed JavaScript expressions in JSX by using curly braces:

import React from 'react'

function Conditionals2(props) {
    const cars = props.cars;
  return (
      <div>
          {cars.length > 0 && 
              <h2>I will have { cars.length} cars very soon...!!</h2>
          }
    </div>
  )
}

export default Conditionals2;