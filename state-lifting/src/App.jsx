import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Card from './componets/Card'

function App() {
   const [name, setName] = useState('');
  return (
    <>
    <Card name={name} setName={setName}/>
    <p>Name state parent component and value of name is{name}</p>
    </>
  )
}

export default App
