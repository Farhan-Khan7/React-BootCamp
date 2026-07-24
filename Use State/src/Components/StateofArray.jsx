import React from 'react'
import { useState } from 'react'

const StateofArray = () => {


    const [val , setVal] = useState([0,1,2,3,4,5,6,7,8,9,10])
  return (
    <div>
        {val.map(item => <h1>{item}</h1>)}
        <button onClick={()=>setVal(val.filter((item , idx) => (idx !== val.length-1)))} className='cursor-pointer px-4 py-1.5 bg-amber-200 rounded font-bold mt-4.5'>Remove</button>
    </div>
  )
}

export default StateofArray
