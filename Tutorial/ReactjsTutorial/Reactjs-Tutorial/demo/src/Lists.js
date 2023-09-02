// List Data - render all cars from object 
import React from 'react'
import Garage from './Garage';

// function Lists() {
//   const cars = ["Rolls Royce", "Mustang", "Buggati"];
//   return (
//       <div>
//           <h1>I will have Some cars like - </h1>
//       <Garage brand={cars} />
//     </div>
//   )
// }

function Lists() {
  const cars = [
    { id: 1, brand: "Rolls Royce" },
    { id: 2, brand: "Mustang" },
    { id: 3, brand: "Buggati" }
  ]; 

  return (
      <div>
      <h1>I will have Some cars like - </h1>
      <Garage cars={ cars} />
    </div>
  )
}

export default Lists;