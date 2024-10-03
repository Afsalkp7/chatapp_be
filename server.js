import express from 'express'
import dotenv from 'dotenv'
import authRouter from './router/authRouter.js'
import messageRouter from './router/messageRouter.js'
import connectToMongoDB from './database/connect.js';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config()
app.use(express.json())
app.use(cookieParser())
const PORT = process.env.PORT || 4000;

app.get("/", (req,res)=>{
    res.json({isWorking : true});
})

app.use("/api/auth", authRouter)
app.use("/api/message", messageRouter)

app.listen(PORT , () => {
    connectToMongoDB();
    console.log(`Server Running on PORT number : ${PORT}`)
})