import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/UserCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
 <UserCard name="priynka" desc="Heloo" style={{"border-radius":"10px"}}/>
 <UserCard name="riya" desc="kaise ho"/>
 <UserCard name="nikita" desc="secs"/>
 
 </div>
    </>
  )
}

export default App
