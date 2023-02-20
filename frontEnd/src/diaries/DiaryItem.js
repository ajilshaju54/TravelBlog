import { Card,CardHeader,Avatar,IconButton,CardContent, CardActions} from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography'
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import {Box} from '@mui/system';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import {Link} from '@mui/material';



const DiaryItem = ({title,description,image,location,date,id,user}) => {
 console.log(user)
const islogedInUser = () => {
  if(localStorage.getItem("userId") === user){
    return true
  }
  return false
}


  return (
    <Card sx={{ maxWidth: "50%", height:"67vh",width:"50%", margin:1,padding:1, display:"flex",
    flexDirection:"column" ,boxShadow:"5px 5px 10px #ccc" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
         {  <EditLocationAltIcon />}
          </IconButton>
        }
        title={title}
        header={location}
         subheader={date}
      />
      <img
        
        height="194"
        src={image}
      
        
      />
      <CardContent>
      
        <Typography variant="h6" color="text.secondary" paddingBottom={2}>
        {title}
        </Typography>
        <hr/>
        <Box paddingTop={1} display={"flex"} >
        <Typography fontWeight={"bold"} width={"170px"} variant="caption">
          Ajil Shaju
        </Typography>

        <Typography variant="body2" color="text.secondary">
       {description}
        </Typography>
       
        </Box> 
       
       
      </CardContent>


      {islogedInUser (
       <CardActions sx={{marginLeft:'auto'}}>
      <IconButton LinkComponent={Link} to={`/post/${id}`} color='warning'>
        <ModeEditOutlineIcon />
        </IconButton>
      <IconButton color='error'>
        <DeleteForeverIcon/>
        </IconButton>
    </CardActions>
      )}
    </Card>

  )
}

export default DiaryItem;