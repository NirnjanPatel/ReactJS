import React from 'react'
import { ReactDOM } from 'react';
import { useState } from 'react';

function Forms2() {
    const [name, setName] = useState("");
    console.log(setName);
  return (
      <div>
          <h2>This is form submittion tutorial with using useState hook</h2>
          <form>
              <lable>Enter your name : </lable>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
              <input type="submit" />
          </form>
    </div>
  )
}

export default Forms2;