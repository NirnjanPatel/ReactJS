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
    const shoot = (a,b) => {
        alert("Event type = " + b.type);
    }
  return (
    <div>
          <button onClick={(event) => {
              shoot("Goal...!",event)
          }}>Event type.!</button>
    </div>
  )
}

export default Events;