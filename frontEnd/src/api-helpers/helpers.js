import axios from "axios";

export const getAllPosts=async()=>{
 const res= await axios.get("/posts");
    if(res.status!==200){
        return console.log("some error occurred");
    }
      
    const data=res.data
    return data;


};

export const sendAuthRequest =async (signup,data) => {
     const res = await axios.post(`/user/${signup? "signup":"login"}/`,{
        name:data.name? data.name:"",
        email:data.email,
        password:data.password
     })
    .catch((err)=>console.log(err));
  
     if(res.status!==200 && res.status!==201){
        return console.log("unable to Authenticate")
     }

  const resData = await res.data
  return resData

}


export const addPost = async (data)=>{
 const res =  await axios.post("/posts/", {
      title: data.title,
      description: data.description,
      location:data.location,
      image:data.imageUrl,
      date:data.date,
      user:localStorage.getItem("userId"),
   })
   .catch((err)=> console.log(err))

   if(res.status!==201){
      return console.log("Error occured")
   }



   const resData= await res.data
   return resData;



}