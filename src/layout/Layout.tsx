import React from 'react';
import { Menu, RightMenu } from '../components';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div >
        <div style={{display: "flex", height: "100%"}}>
            <Menu />
            <Outlet />
            <RightMenu />
        </div>
    </div>
  )
}

export default Layout;