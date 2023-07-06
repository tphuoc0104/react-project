import React from 'react'
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import "./register.css"

const Register = () => {
  return (
    <div className='register'>
      <Card sx={{
        maxWidth: '60%', border: '3px',
        background: 'linear-gradient(to left, #ed4264, #ffedbc)',
        display: 'block',
        textAlign: 'center',
        borderRadius: '15px',
        width: '50%',
        height: '70%',
        boxShadow: '5px 5px 10px linear-gradient(#ed4264, #ffedbc)',
        margin: 'auto'
      }}>
        <h1>Register </h1>
        <div className="register-form">
          <TextField margin='normal' variant="outlined" type='text' label="Email" required />
          <TextField margin='normal' variant="outlined" type='password' label="password" required />
          <TextField margin='normal' variant="outlined" type='password' label="re-password" required/>
          <Button variant="contained" sx={{width:'40%', margin: '10px'}} startIcon={<AppRegistrationIcon />} color='secondary'>Register</Button>
        </div>
      </Card>
    </div>
  )
}

export default Register