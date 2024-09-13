import UserContextProvider from './Context/UserContextProvider'
import './App.css'
import Login from './Componets/Login'
import Profile from './Componets/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserContextProvider>
    <h1>hello</h1>
    </UserContextProvider>
    <Login></Login>
    <Profile></Profile>
    
    </>
  )
}

export default App
