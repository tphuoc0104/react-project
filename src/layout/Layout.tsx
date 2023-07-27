import React from 'react';
import { Menu, RightMenu } from '../components';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div >
        <div style={{display: "flex"}}>
            <Menu />
            <Outlet />
            <RightMenu />
        </div>
    </div>
  )
}

export default Layout;