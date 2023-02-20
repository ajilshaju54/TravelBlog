import React, { useState } from 'react'
import { Box } from '@mui/system'
import { FormLabel, TextField, Typography } from '@mui/material'
import {Button} from '@mui/material'
import { sendAuthRequest } from '../api-helpers/helpers'
import { useDispatch } from 'react-redux'
import { authActions } from '../store'

const Auth = () => {
  const dispatch = useDispatch()

const [isSignup,setIsSignup] = useState(true)
const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(inputs);

 if(isSignup) {
  sendAuthRequest(true,inputs)
  .then((data)=>localStorage.setItem("userId",data.user._id))
  .then(()=> {
    dispatch(authActions.login())
  })
  .catch((err)=>console.log(err))
 }  
 else{
  sendAuthRequest(false,inputs)
  .then((data)=>localStorage.setItem("userId",data.id))
  .then(()=> {
    dispatch(authActions.login())
  })
  .catch((err)=>console.log(err))
 }


}

const[inputs,setInputs] = useState({name:"",email:"",password:""})
const handleChange = (e) =>{
  setInputs((prevState)=>({
    ...prevState,
    [e.target.name]: e.target.value

  }))
}

  return (
  <Box width={"40%"} borderRadius={10} boxShadow={"5px 5px 10px #ccc"} margin="auto" marginTop={10}>


   <form onSubmit={handleSubmit}>
    <Box 
    display={"flex"}
    flexDirection={"column"}
    width="60%"
    padding={5}
    margin="auto"
    >

   <Typography 
    variant='h4'
    textAlign={"center"}
   >
   {
    isSignup? "Signup":"Login"
   }
   </Typography>

   
{ isSignup && <>
   <FormLabel>Name</FormLabel>
   <TextField value={inputs.name}
   onChange={handleChange}
   name="name"
   margin='normal'
   required
   />

   </>
}
   
   <FormLabel>Email</FormLabel>
   <TextField value={inputs.email}
   name="email" margin='normal' 
   onChange={handleChange}
   type={"email"}
   required
   />

   
   <FormLabel>Password</FormLabel>
   <TextField value={inputs.password}
      onChange={handleChange}
   name="password" margin='normal' type={"password"} required/>
   
   <Button
    sx={{mt:2}} type="submit" variant="contained" >
    {isSignup? "signup":"login"}
    </Button>
    <Button  onClick={()=>setIsSignup(!isSignup)} sx={{mt:2, borderRadius:6}}  variant="outlined">
    change to {isSignup?"login":"Signup"}
    </Button>

    </Box>
   </form>

  </Box>
  
)}

export default Auth