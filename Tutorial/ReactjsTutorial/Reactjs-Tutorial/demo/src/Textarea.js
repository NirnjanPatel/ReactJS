// Textarea - is not same as HTML, it stores value of textarea in value attribute.
// onchange - means HTML/React element has been changed

import React, { useState } from 'react'

function Textarea() {
    const [textarea, setTextarea] = useState("The value of textarea will go to the value attribute");

    const handleChange = (event) => {
        setTextarea(event.target.value);
        console.log(event.target.value);
    }

  return (
      <div>
          <textarea onChange={handleChange} value={textarea} />
          {/* <p>{value}</p> */}
    </div>
  )
}

export default Textarea;
