import React, { useContext } from 'react'
import { MyStore } from './Context/MyContext'

const Comp5 = () => {
    let contextData = useContext(MyStore)
    console.log("Context Data in Comp5", {contextData})
  return (
    <div>
      I am Component 5 
    </div>
  )
}

export default Comp5
