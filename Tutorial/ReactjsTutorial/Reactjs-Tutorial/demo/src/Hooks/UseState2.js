/*
Updating Objects and Arrays in State
-------------------------------------

* When state is updated, the entire state gets overwritten.
* if we will update only a single keyt than it will remove other key values from that object 
* that time spread operator will be very useful

*/
import React, { useState } from "react";

const UseState1 = () => {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "2025",
        color:"Black"
    });

    const updateColor = () => {
        setCar(previousState => {
            return { ...previousState, color: "Blue" }
        });
    }

    const updateBrand = () => {
        setCar(previousState => {
            return { ...previousState, brand: "Land Rover" }
        });
    }

  return (
    <div>
          <h1>I will have {car.brand} {car.model} with { car.color} color in { car.year}</h1>
          <button type="button" onClick={updateColor}>Change Color..!</button>
          <button type="button" onClick={updateBrand}>Change Brand..!</button>
    </div>
  );
};

export default UseState1;
