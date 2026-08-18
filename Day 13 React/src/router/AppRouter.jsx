import React from 'react'
import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import Services from '../pages/Services';


const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/project' element={<Projects />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </div>
  )
}

export default AppRouter
