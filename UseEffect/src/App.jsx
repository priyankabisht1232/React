import { useEffect, useState } from 'react'
import Logger from './components/Logger';

import './App.css'
import TimerComponent from './components/TimerComponent';

function App() {

  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);

  //first => side-effect function
  //second =>cleaup function
  //third => comma separeted dep list

  //  useEffect(() => {
  //    first
   
  //    return () => {
  //      second
  //    }
  //  }, [third])

  //variation :1
  //runson evey render
  // useEffect(() =>{
  //   alert("i will run on each render")
  // })
   

  //varitaion: 2
  // useEffect (()=>{
  //   alert("i will run only first render");
  // },[])



   //variation: 3
  //  useEffect(() =>{
  //     alert("i will run every time when count is update")
  //  }, [count, total])

  //   function handleClick(){
  //     setCount(count+1)
  //   }

    //variation: 4
    // multiple dependency 

  //  useEffect(() =>{
  //     alert("i will run every time when count is update")
  //  }, [count, total])

  // useEffect(() =>{
  //   alert('count is updated')
     
  //   return () =>{
  //    alert("count is nmounted from UI");
  //   }
  //  },[count])
     

  //   function handleClick(){
  //     setCount(count+1)
  //   }

  //   function handleTotal(){
  //     setTotal(total+1)
  //   }


  //iss baarlet's add a cleanup function

 
    return (

  
    
      <div>
        {/* <button onClick={handleClick}>
          update Count
        </button>
        <br/>
        click is: {count}
        <br/>
        <button onClick={handleTotal}>
          update Cunt
        </button>
        <br/>

        total is: {total} */}

        {/* <Logger/> */}

        <TimerComponent/>
      </div>
    )
    
  
}

export default App
