// We can embed JavaScript expressions in JSX by using curly braces:

import React from 'react'

function Conditionals3(props) {
    const isGoal = props.isGoal;
    
  return (
      <div>
          {isGoal ? <MadeGoal /> : <MissedGoal />};
    </div>
  )
}

function MadeGoal() {
    return (
        <h1>Goal...!</h1>
    )
}
function MissedGoal() {
    return (
                <h1>Goal...! Missed</h1>
    )
}
export default Conditionals3;