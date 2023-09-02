/*
React has the same events as HTML: click, change, mouseover etc.
onClick -> onclick.
onClick={shoot}  -> onClick="shoot()"
Ex. React:
<button onClick={shoot}>Take the Shot!</button>
HTML:
<button onclick="shoot()">Take the Shot!</button>
*/
import React from 'react'

function Events() {
    const shoot = (a) => {
        alert(a);
    }
  return (
    <div>
          <button onClick={() => {
              shoot("Goal...!")
          }}>Take Shot.!</button>
    </div>
  )
}

export default Events;