import React from 'react'
import {useNavigate} from 'react-router-dom'

const Home= ()=> {
  const navigate = useNavigate();
  function handleClick(){
    navigate('/about');
  }
  return (
    <div>
      Home page
      <button onClick={handleClick}>
        
        Move to ABCTD Page
      </button>
    </div>
  )
}

export default  Home;
