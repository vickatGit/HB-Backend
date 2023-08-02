const express=require('express');
const {dbConnect}=require("./config/db_connection")
const dotenv = require('dotenv').config();
dbConnect()
const app=express();
app.use(express.json())
app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`)
})