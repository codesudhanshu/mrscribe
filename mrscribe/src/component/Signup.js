import React from 'react'
import {Button, TextField} from '@mui/material'
import { Link } from 'react-router-dom'
import Scribe from './Scribe'
import Login from './Login'

function Signup() {
  return (
    <div>
      <div className='userdata'>
       <form action='' method='post' id='forms'>
       <TextField className='text' type="text" placeholder="Enter Your E-mail" sx={{mt:3}}  /><br />
       <TextField className='text' type="password" placeholder="Enter Your Password" sx={{mt:3}}  /><br />
       <TextField className='text' type="text" placeholder="Enter Code" sx={{mt:3}}  /><br />
       <Button variant='contained' color="primary" sx={{mt:3,ml:25}} >Submit</Button>
       </form>
      </div>
      <div className='links'>
        <Link to="/login" element={<Login />} >Signup</Link>
        <Link to="/" element={<Scribe />}>Home</Link>
      </div>
    </div>
  )
}

export default Signup
