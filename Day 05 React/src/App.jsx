import React, { useState } from 'react'
import AuthForm from './Component/Authform.jsx'

const App = () => {

  let [toggle , setToggle] = useState(true)
  let [user, setUser] = useState([]);



  return (
    <div>
      < AuthForm toggle={toggle} setToggle={setToggle} user={user} setUser={setUser} />
    </div>
  )
}

export default App
