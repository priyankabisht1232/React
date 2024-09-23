import React, { useEffect, useState } from 'react'

function TimerComponent() {
  const [seconds, setseconds] = useState(0);

  useEffect(()=>{
    const intervalid = setInterval(()=>{
      console.log("setInterval executed ")
      setseconds(prevSeconds =>prevSeconds +1);
    }, 1000);

    return () =>{
      console.log("stop")
      clearInterval(intervalid);
    };
  },[]);

  return (
    <div>
      <h1>Second: {seconds}</h1>
    </div>
  )
}

export default TimerComponent
