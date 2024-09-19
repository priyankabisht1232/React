import React from 'react'
import   "./UserCard.css"

function UserCard (props)  {
  return (
    <div className='user-container' style={props.style}>
      <p id="user-name">{props.name} </p>
      <img  id="user-img" src='https://i.pinimg.com/564x/26/3e/41/263e4147bc51afc473b61069727648d6.jpg' alt="love"></img>
      <p id="user-descripiton">{props.desc}</p>
      
    </div>
  )
}

export default UserCard
