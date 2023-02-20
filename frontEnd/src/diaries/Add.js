import { Typography ,Box, FormLabel, TextField} from '@mui/material'
import React, { useState } from 'react'
import  TravelExploreIcon from '@mui/icons-material/TravelExplore'
 import{ Button} from '@mui/material'
import { addPost } from '../api-helpers/helpers'


const Add = () => {
const [input,setInput] = useState({
  title:"",
  description:"",
  location:"",
  imageUrl:"",
  date:"",
});
const handleChange = (e) =>{
  setInput((prevState)=>({
    ...prevState,
    [e.target.name]: e.target.value
  }))
  
}
const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(input);
  addPost(input).then((res)=>console.log(res))
  .catch((err)=>console.log(err))
}

  return (
    <Box display={"flex"} flexDirection={"column"} width="100%" height={"100%"}>
     <Box display={"flex"} margin="auto" padding={2} >
        <Typography varient="h3" fontWeight={"bold"} fontFamily={"dancing script"} >
            Add Your Travel Diary
        </Typography>
        <TravelExploreIcon 
          sx={{fontSize:"40px", paddingLeft:"1", color: "lightcoral"}}
        />
     </Box>
     <form onSubmit={handleSubmit}>
        <Box padding={3} display="flex" width={"80%"} margin={"auto"} flexDirection={"column"}>
         
          <FormLabel sx={{fontFamily: "quicksand"}}>Title</FormLabel>
          <TextField 
          onChange={handleChange}
          name="title"
          value={input.title}
          margin='normal' variant="standard"/>
          
          <FormLabel sx={{fontFamily: "quicksand"}}>Description</FormLabel>
          <TextField
          onChange={handleChange}
          name="description"
          value={input.description}
          margin='normal' variant="standard"/>
         
          <FormLabel sx={{fontFamily: "quicksand"}}>Image URL</FormLabel>
          <TextField 
            onChange={handleChange}
            name="imageUrl"
            value={input.imageUrl}
          margin='normal' variant="standard"/>
          <FormLabel sx={{fontFamily: "quicksand"}}>Location</FormLabel>
          <TextField 
          onChange={handleChange}
          name="location"
          value={input.location}
          margin='normal' variant="standard"/>
          
          <FormLabel
           sx={{fontFamily: "quicksand"}}>Date</FormLabel>
          <TextField
          type="date"
          onChange={handleChange}
          name="date"
          value={input.date}
           margin='normal' variant="standard"/>

          <Button variant="contained" color="warning" type='submit'
           sx={{mt:2, width:"50%",margin:"auto", borderRadius:7}}
         
          >POST</Button>
        </Box>
     </form>

    </Box>
  )
}

export default Add