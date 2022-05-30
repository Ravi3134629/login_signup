import React from 'react'
import { TextField,Button,Box,Alert } from "@mui/material";

import { NavLink,useNavigate } from "react-router-dom";
import axios from 'axios'
import {useState} from 'react';
const Registration = () => {
    const [error,setError] = useState({
        status:false,
        msg:'',
        type:''
      })
      const navigate = useNavigate();
          const handleSubmit = (e) =>{
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const actualData ={
                name:data.get('name'),
                email:data.get('email'),
                password:data.get('password'),
                password_confirmation:data.get('cpassword'),
                tc:true
      
              }
              
      
              if(actualData.name && actualData.email && actualData.password && actualData.password_confirmation && actualData.tc){
                console.log(actualData);
                axios.post('http://localhost:8080/api/user/register',actualData).then((response)=>{
                  console.log(response);
                  if(response.data.status === 'success'){
                    navigate('/login');
                  }else{
                   setError({
                     status:true,
                     msg:response.data.message,
                     type:'error'
                   })
                  }
                })
                document.getElementById('register-form').reset();
                setError({status:true,msg:'You are registered  Succefully',type:'success'})
                  navigate('/login');
                  
      
              }else{
               setError({status:true,msg:'please fill all fields',type:'error'})
              }
          }
  return (
    <>
        <Box component='form' noValidate sx={{mt:1}} id='register-form' onSubmit={handleSubmit}>
    <TextField required fullWidth id='name'  name='name' label='Your name' />
    <TextField required fullWidth id='email'  sx={{mt:1}} name='email' label='email address' />
    <TextField required fullWidth id='password' sx={{mt:1}} name='password' label='Your password' type='password' />
    <TextField required fullWidth id='cpassword' sx={{mt:1}} name='cpassword' label='Repeate your password' type='password' />

   <Box textAlign='center'>
       <Button type="sumbit " variant="contained" sx={{mt:1,mb:2,mx:5}}>Register</Button>
   </Box>
  
   {error.status? <Alert severity={error.type}>{error.msg} </Alert>:'' }
   
    </Box>
    </>
  )
}

export default Registration