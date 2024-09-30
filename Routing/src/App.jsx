import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import DashBoard from './components/DashBoard';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import ParamComp from './components/ParamComp';
import Course from './components/Course';
import MockTest from './components/MockTest';
import Reports from './components/Reports';
import NotFound from './components/NotFound';



const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <div>
        <Navbar></Navbar>
        <Home/>,
      </div>
     
    },
    {
      path:"/about",
      element:<div>
      <Navbar></Navbar>
      <About/>,
    </div>
  
     ,
    },
    {
      path:'/dashboard',
      element: <div>
        <Navbar/>
      <DashBoard/>,
      </div>,

      children:[
        {
        path:'course',
        element: <Course/>
        },
        {
          path:'mocktest',
          element:<MockTest/>
        },
        {
          path:'reports',
          element:<Reports/>
        },
        
      ]
    },
    {
      path: "//student/:id",
      element: <div>
      <Navbar/>
    <ParamComp/>,
    </div>
    },
    {
      path:'*',
      element:<NotFound/>
    }
  ]
)
function App() {


  return (
    <>
 <div>
 <RouterProvider router={router} />
 </div>
    </>
  )
}

export default App;
