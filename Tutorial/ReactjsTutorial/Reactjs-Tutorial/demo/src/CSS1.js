/*
Three ways to apply css in reactjs
* Inline styling
* CSS stylesheets (object)
* CSS Modules

Rules
-----
* camelCased Property Names  - Use backgroundColor instead of background-color:
* 
*/


// Inline Styling
// value must be a JavaScript object:

import React from 'react'

const CSS = () => {
  return (
      <div>
          <h1 style={{
              color: "red",
              textAlign: "center",
              marginTop: "25%",
              backgroundColor:"skyblue"
          }} >Inline CSS added.............!!!!!!!!!!!!!!!!</h1>
    </div>
  )
}

export default CSS;