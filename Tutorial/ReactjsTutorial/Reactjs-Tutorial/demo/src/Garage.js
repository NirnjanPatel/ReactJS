import React from 'react'

// function Garage(props) {
//     const cars = props.brand;
//     return (
//         <div>
//           <p>  {
//                 cars.map((cars) => (
//                     <h2><ul><li>{cars}</li></ul></h2>
//                 ))
//                 }
//             </p>
//     </div>
//     )
// }

function Garage(props) {
    // console.log(props.cars[0].id);
    return (
        <div>
            <ul>
                {/* manual access */}
            {/* <li><h3>{props.cars[0].id} { props.cars[0].brand}</h3></li>
            <li><h3>{props.cars[1].id} { props.cars[1].brand}</h3></li>
            <li><h3>{props.cars[2].id} { props.cars[2].brand}</h3></li> */}

            {/* Loop access */}
            <p>  {
                props.cars.map((car) => (
                    <h2><ul><li>{car}</li></ul></h2>
                ))
                }
                </p>
                </ul>
    </div>
    )
}

export default Garage;