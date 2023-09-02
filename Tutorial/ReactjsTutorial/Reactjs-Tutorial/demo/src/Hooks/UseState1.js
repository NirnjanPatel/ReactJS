// // We can create multiple state Hooks

// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";

// const UseState1 = () => {
//   const [brand, setCount] = useState("Ford");
//   const [model, setModel] = useState("Mustang");
//   const [year, setYear] = useState("2025");
//   const [color, setColor] = useState("Black");

//   return (
//     <div>
//           <h1>I will have {brand} {model} with { color} color in { year}</h1>
//     </div>
//   );
// };

// export default UseState1;

// Or we can use an object instead rather than using multiple hooks
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const UseState1 = () => {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "2025",
        color:"Black"
  });

  return (
    <div>
          <h1>I will have {car.brand} {car.model} with { car.color} color in { car.year}</h1>
    </div>
  );
};

export default UseState1;
