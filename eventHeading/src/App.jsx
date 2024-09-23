import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
function handleClick(){
 alert("i am clicked")
}

function handlemounse(){

}

function handleInputChange(e){
  console.log("value  till now ", e.target.value)
}
function handleSubmit(e){
  e.preventDefault();
  alert("Form subimt ho gya")
}


  return (
        <div>

           <button onClick={()=>alert("Button click ")}>
            clcik me
           </button>
        
          {/* <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleInputChange} />
            <button type= "submit">submit</button>
          </form> */}
 
 {/* {/* <p onMouseOver={handlemounse} style={{border: "1px solid balck"}}>
   i am para
 </p>

          <button onClick={handleClick}>
            Click me
          </button>
      }
         */}
          </div>
  )
}

export default App
