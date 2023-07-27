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
        
        <div className="home">
          <Link to="/home">
            <HomeOutlinedIcon />
            Home
          </Link>
        </div>

        <div className="Search">
          <SearchOutlinedIcon />
          Search
        </div>

        <div className="messages">
          <Link to="/message">
            <MailOutlineIcon />
            Messages
          </Link>
        </div>

        <div className="notifications">
          <NotificationsNoneIcon />
          <button>Notifications</button>
        </div>
      </div>
    </div>
  )
}

export default Menu;