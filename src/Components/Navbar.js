import React from 'react'
import { AppBar,Box,Toolbar,Typography,Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return <>
<Box sx={{flexBox:1}}>
  <AppBar postion="static" color='secondary'>
<Toolbar>
  <Typography variant='h5' component='div' sx={{flexGrow:1}}>
  Megamindz
  </Typography>
  <Button component={NavLink} to='/' style={({isActive})=>{return {backgroundColor:isActive ? '#6d1b7b':''}}} sx={{color:'white'}} >Home</Button>
  {/* <Button component={NavLink} to='/contact'  style={({isActive})=>{return {backgroundColor:isActive ? '#6d1b7b':''}}} sx={{color:'white'}}  >Contact</Button> */}
  <Button component={NavLink} to='/login'  style={({isActive})=>{return {backgroundColor:isActive ? '#6d1b7b':''}}} sx={{color:'white'}}  >Login/Registration</Button>
  {/* <Button component={NavLink} to='/dashboard'  style={({isActive})=>{return {backgroundColor:isActive ? '#6d1b7b':''}}} sx={{color:'white'}}  >Login/Registration</Button> */}
</Toolbar>
  </AppBar>
</Box>
  </>
}

export default Navbar
