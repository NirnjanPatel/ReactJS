import React from 'react';

function Truck(props){
    return(
        <div>
            <h2>This is {props.brand.model} Truck</h2>
        </div>
    )
}
function Garage(props){
    const carName = "BMW";
    const carInfo ={name:"Audi",model:"Q8"}
    return(
        <div>
            <h2>{props.brand} Who is in my Garage</h2>
            <Truck brand = {carInfo}/>  
             {/* variable name is given to Truck by a prop  */}
        </div>
    )
}
export default Garage;