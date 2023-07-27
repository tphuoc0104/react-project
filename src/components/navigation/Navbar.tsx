import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo" style={{ height: '100%'}}>
        <Link to="/home">
          <img src="https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png" style={{ borderRadius: '12px', height:"90%"}} alt='logo' />
        </Link>
      </div>
      <div className="search-bar">search</div>
      <div className="nav-items">
  
      </div>
    </div>
  )
}

export default Navbar;