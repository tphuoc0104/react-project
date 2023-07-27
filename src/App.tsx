import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login, Register, Home } from './pages'
import './App.css';

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
    path: "/home",
    element: <Home />
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={route} />
      {/* <Login /> */}
      {/* <Register /> */}
    </div>
  );
}

export default App;
