import express from 'express'
import mongoose from'mongoose'
import dotenv from 'dotenv'
import userRouter from './travel diaries/routing/user.js';
import postRouter from './travel diaries/routing/post.js';
import cors from 'cors'

const app =express();
dotenv.config();

//middlewares
app.use(cors())
app.use(express.json())
app.use("/user",userRouter)
app.use("/posts",postRouter)

//connection to the mongodb
mongoose.connect(`mongodb+srv://ajilshaju:${process.env.MONGODB}@cluster0.ti4o65r.mongodb.net/?retryWrites=true&w=majority`
).then(()=>
app.listen(5000, ()=>
   console.log("listening to localhost port 5000")
)
).catch((err)=>console.log(err))
