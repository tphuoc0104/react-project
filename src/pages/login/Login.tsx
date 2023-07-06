import React from 'react'
import './login.css'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';



const Login = () => {
  return (
    <div className='login'>
      <div className="card">
        <div className="introduction">
          <div className="text">
            <h1>Welcome to the Platform</h1>
            <p>This is the social media platform for my portfolio project. welcome to my site</p>
            <p>Don't have a account ? <span>Register!</span></p>
          </div>
        </div>
        <div className='login-form'>
          <h1 className='header'>Login</h1>
          <TextField margin='normal' variant='filled' type='email' name='email' label='Email' id="Email"/>
          <TextField margin='normal' variant='filled' type='password' name='password' label='password' id="passWord"/>
          <Button variant="contained" sx={{width:'70%', margin: '10px'}} startIcon={<LoginIcon />} color='secondary'>Login</Button>
          <p className='forget-password'>forgot password</p>
        </div>
      </div>
    </div>
  )
}

export default Login;