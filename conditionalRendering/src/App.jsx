import {useState} from 'react'

import './App.css'
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';

function App() {
  const[isloggedIn, setLoggedIn] = useState(true);
 

  return (
    <div>
      <h1>welcome Everyone</h1>
      <div>
        {
          isloggedIn && <LogoutBtn/>
        }
      </div>
    </div>
  )
  
  // ternary

  // return (

  //   <div>
  //     {isloggedIn ? <LogoutBtn/> : <LoginBtn/> }
  //   </div>
  // )
  // <if-else-rendring></if-else-rendring>

//   if(isloggedIn){
//   return (
//    <LogoutBtn/>
    
//   )
// }
// else{
//   return (
//     <LoginBtn/>
//   )
  
  
// }
}
export default App
