// Import the stylesheet

import React from 'react'
import styles from "./Style.module.css"

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
          <h1 className={styles.heading} >This is stylesheet</h1>
    </div>
  )
}

export default CSS;