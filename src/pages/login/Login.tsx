import React from 'react'
import styled from 'styled-components'
import './login.css'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';



const Login = () => {
  return (
    <div className='login' >
      <div className="card">
        <Card className="Card" sx={{ minWidth: 500 }}>
          <CardHeader>Login</CardHeader>
          <CardContent>
            hi
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Login;