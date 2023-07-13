import React from 'react'
import {Button, TextField} from '@mui/material'
import Signup from './Signup'
import { Link } from 'react-router-dom'
import Scribe from './Scribe'

function Login() {
  return (
    <div>
      <div className='userdata'>
       <form action='' method='post' id='forms'> 
       <TextField className='text' type="text" placeholder="Enter Your E-mail" sx={{mt:3,ml:25}} /> <br />
       <TextField className='text' type="password" placeholder="Enter Your E-mail" sx={{mt:3,ml:25}} /><br />
       <Button variant='contained' color="primary" sx={{mt:3,ml:25}} >Submit</Button>
       </form>
      </div>
      <div className='links'>
        <Link to="/signup" element={<Signup />} >Create New Account</Link>
        <Link to="/" element={<Scribe />}>Home</Link>
      </div>
    </div>
  )
}

export default Login
