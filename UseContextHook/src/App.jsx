import { createContext } from 'react'
import './App.css'
import ChildA from './components/ChildA';
import { useState } from 'react';


  //Step1 : create context
  //Step2 : wrap all the child inside a provider
  //step3 : pass value
    //step 4:consumer k ander jaake consume krna
  const UserContext =createContext();

  const ThemeContext = createContext();

  function App() {
    const [user, setUser] = useState({name:"priyanka"});
   const [theme, setTheme] =useState('light');

  return (
    <>
   <UserContext.Provider value={user}>
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div id='container' style=
      {{background:theme ==='light'?"beige": "black"}}>
      <ChildA/>
      </div>
    </ThemeContext.Provider>
    </UserContext.Provider>

      {/* <div>
        <UserContext.Provider value={user}>
        <ChildA/>
        </UserContext.Provider>
  </div> */}
  </>
  
)
}

export default App
export {UserContext}
export{ThemeContext}

