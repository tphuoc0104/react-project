import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { Login, Register, Home } from './pages'
import Layout from './layout/Layout'
import './App.css';




function App() {
  
  const isLogin = 1;

  const ProtectRoute = ({children}:any) => {
    if (isLogin) {
      console.log(children);
      return children;
    }
    return <Navigate to="/Login" />
  }
  const route = createBrowserRouter([
    {
      path: "/login",
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: "/",
      element: <ProtectRoute> <Layout /> </ProtectRoute>,
      children: [
        {
          path:"/",
          element: <Home />
        }
        // {
        //   path:"/profile/:id",
        //   element: <Profile />
        // }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={route} />
      {/* <Login /> */}
      {/* <Register /> */}
    </div>
  );
}

export default App;
