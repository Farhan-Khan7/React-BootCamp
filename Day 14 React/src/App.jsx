import react from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router';
import AppRoute from './routes/AppRoute';


const App = () =>{
  return (
    <div className='flex flex-col'>
      <Navbar />
      <AppRoute />
      
    </div>
  )
}

export default App
