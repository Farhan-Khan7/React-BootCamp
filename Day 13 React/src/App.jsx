import  React from 'react';
import  {useState} from 'react';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Contact from "./pages/Contact";
import About from './pages/About';
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import { Route, Routes } from 'react-router';

const App = () => {

  // const [toggle, setToggle] = useState("home")
  return (
    <div className = "text-white bg-black h-screen flex flex-col">
      <Navbar/>
      <div>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </div>
      
    </div>
  ) 
}

export default App
