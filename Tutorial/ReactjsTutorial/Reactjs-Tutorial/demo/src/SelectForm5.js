// drop down and select box is also different from HTML in reactjs.
// drop down - selected attribute

import React, { useState } from 'react'

function SelectForm5() {
    const [myCar, setMyCar] = useState("Select an car");
    
    const handleChange = (event) => {
        setMyCar(event.target.value);
        console.log(event.target.value);
    }

  return (
      <div>
          {/* <select value={myCar} onChange={handleChange}> */}
          <select onChange={handleChange}>
              <option value="Mustang"  >Mustang</option>
              <option value="Buggati" selected>Buggati</option>
              <option value="Rolls Royce" >Rolls Royce</option>
          </select>
    </div>
  )
}

export default SelectForm5;
