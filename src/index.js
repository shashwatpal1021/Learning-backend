// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

// second approach



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at port : 
        ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("mongo db connectio failed !! ",err)
})


















/*
// first approach
import express from "express";

const app=express()

;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERR: ",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process}`)
        })
    } catch (error) {
        console.error("ERROR: ",error)
        throw err
    }
})();

*/
