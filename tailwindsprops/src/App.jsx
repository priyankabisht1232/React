import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './Cart'

function App() {
  const [count, setCount] = useState(0)

  // let myobh ={
  //   name: 'priyanka',
  //   age: 21
  // }

  // let newarr =[1,2,3,5,4,6,]

  return (
    <>
  <h1 className='bg-green-400 text-black -4 mb-4'>Hello</h1>
 
<Cart username="priyanka" btnText="click me" />
<Cart username="Riya" btnText="visit me" />


    </>
  );
}

export default App
