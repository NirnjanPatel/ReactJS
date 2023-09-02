// CSS stylesheets (object)

import React from 'react'

const CSS = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif",
    textAlign: "center"
  };

  return (
      <div>
          <h1 style={myStyle}>This is stylesheet</h1>
    </div>
  )
}

export default CSS;