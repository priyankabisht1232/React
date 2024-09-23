import React,{useEffect, useState} from 'react'

function Logger() {
  const [count, setCount] =useState(0);

  useEffect(() =>{
    console.log("components rendered or count chagned: " , count);
  });
  return (
    <div>
       <h1>count: {count}</h1>
       <button onClick ={() =>setCount(count+1)}>Increament</button>
    </div>
  );
}

export default Logger
