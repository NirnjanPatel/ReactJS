import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const Navigate = useNavigate();

  const handleHeader = () => {
      Navigate("/signup");
  }

  return (
      <div>
      <h1>Header Page........!!!!!!</h1>
      <button onClick={handleHeader} >Route Page</button>
    </div>
  )
}

export default Header