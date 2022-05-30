import { TextField,Button,Box,Alert } from "@mui/material";

import React from 'react'
import { NavLink,useNavigate } from "react-router-dom";
import {useState} from 'react';
import axios from 'axios';

const UserLogin = () => {
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
          email:data.get('email'),
          password:data.get('password'),

        }
        

        if(actualData.email && actualData.password){
          console.log(actualData);
          axios.post('http://localhost:8080/api/user/login',actualData).then((response)=>{
            console.log(response);
            if(response.data.status === 'success'){
            navigate('/');

            }else{
              document.getElementById('login-form').reset();
              setError({
                status:true,
                msg:response.data.message,
                type:'error'
              })
            }
          })

         
          // setError({status:true,msg:'You are login Succefully',type:'success'})
            // navigate('/');
            

        }else{
         setError({status:true,msg:'please fill all fields',type:'error'})
        }
    }
  return (
    <Box component='form' noValidate sx={{mt:1}} id='login-form' onSubmit={handleSubmit}>
    <TextField required fullWidth id='email' margin="normal" name='email' label='email address' />
    <TextField required fullWidth id='password'margin="normal" name='password' label='Your password' type='password' />

   <Box textAlign='center'>
       <Button type="sumbit " variant="contained" sx={{mt:3,mb:2,mx:5}}>Login</Button>
   </Box>
   <NavLink to='/' >Forgot Password ?</NavLink>
   {error.status? <Alert severity={error.type}>{error.msg} </Alert>:'' }
   
    </Box>
  )
}

export default UserLogin