import React from 'react'

const Nav = () => {
  return (
    <div className='navbar'>
      <img src="https://px.pixxo.io/sheryians/nyc/nyclogo.png" alt="logo"  className='logo'/>
      <div className="navLinks">
        <h5>Home</h5>
        <h5>Beyond Sigma</h5>
        <h5>Dashboard</h5>
      </div>
      <div className="user-section">
        
            <img src="https://api.dicebear.com/10.x/lorelei/svg?seed=developerfarhan07@gmail.com&size=100" alt="profile" />
            <button className='logout'>Logout</button>
        
      </div>
    </div>
  )
}

export default Nav
