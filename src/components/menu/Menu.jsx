import React from 'react';
import './menu.css'
import { Link } from 'react-router-dom'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Menu = () => {
  return (
    <div className='menu'>

      <div className='logo'>
        <img src='' alt="Logo"/>
      </div>

      <div className="navigate" >
        
        <div className="home nav-item">
          <Link to="/home">
            <span className="icon">
              <HomeOutlinedIcon />
            </span>
            Home
          </Link>
        </div>

        <div className="Search nav-item">
          <span className="icon">
            <SearchOutlinedIcon />
          </span>
          Search
        </div>

        <div className="messages nav-item">
          <Link to="/message" style={{fontStyle: "none"}}>
            <span className="icon">
              <MailOutlineIcon />
            </span>
            Messages
          </Link>
        </div>

        <div className="notifications nav-item">
          <span className="icon">
            <NotificationsNoneIcon />
          </span>
          <button>Notifications</button>
        </div>
        
      </div>
    </div>
  )
}

export default Menu;
