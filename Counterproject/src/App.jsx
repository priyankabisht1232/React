import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter, setCounter] =  useState(0)

// let counter =5;

const AddValue =() =>{
  if(counter<20){
 
 counter = counter + 1;
 setCounter(counter)
  }
  console.log("clicked",counter)
}
const removeValue =() =>{
  if(counter>0){
    counter = counter-1;
setCounter(counter-1);
}

}

  return (
    <>
      <h1>hello</h1>

      <h2>Counter value: {counter}</h2>
      <button
      onClick={AddValue}>
        Add value {counter}</button>
      <br/>
      <br/>
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer{counter}</p>
      
    </>
  )
}

export default App
