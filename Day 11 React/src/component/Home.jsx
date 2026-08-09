import React from 'react'
import { useContext } from 'react'
import { MyStore } from '../context/MyStore'

const Home = () => {

  const data = useContext(MyStore);
  console.log("count", data);
    console.log("Home component rendered");
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
    </div>
  )
}

export default Home
