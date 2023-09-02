import React from 'react'

function Conditionals(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal />;
  }
  else {
    return <MissedGoal />;
  }
}

function MadeGoal() {
  return (
    <div>
      <h1>Goal...!</h1>
    </div>
  )
}

function MissedGoal() {
  return (
    <div>
      <h1>Goal...! Missed</h1>
    </div>
  )
}

export default Conditionals;