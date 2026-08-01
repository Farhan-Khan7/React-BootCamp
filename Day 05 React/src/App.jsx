import React, { useState } from 'react'
import AuthForm from './Component/Authform.jsx'

const App = () => {

  let [toggle , setToggle] = useState(true)



  return (
    <div>
      < AuthForm toggle={toggle} setToggle={setToggle} />
    </div>
  )
}

export default App
