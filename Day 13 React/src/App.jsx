import  React from 'react';
import  {useState} from 'react';
import Navbar from './pages/Navbar';
import AppRouter from "./router/AppRouter";
import { Route, Routes } from 'react-router';

const App = () => {

  // const [toggle, setToggle] = useState("home")
  return (
    <div className = "text-white bg-black h-screen flex flex-col">
      <Navbar/>
      <div>
        <AppRouter />
      </div>
      
    </div>
  ) 
}

export default App
