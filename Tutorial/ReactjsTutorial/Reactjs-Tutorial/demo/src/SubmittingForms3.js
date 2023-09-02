// Add a submit button and an event handler in the onSubmit attribute:

import React from 'react'
import { ReactDOM } from 'react';
import { useState } from 'react';

function Forms2() {
    const [name, setName] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();          // Working is not cleared.
        alert(`Hello ${name}....!!!`);
    }
  return (
      <div>
          <h2>This is form submittion tutorial with using useState hook</h2>
          <form onSubmit={handleSubmit}>
              <lable>Enter your name : </lable>
              <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                <input type="submit" />
          </form>
    </div>
  )
}

export default Forms2;