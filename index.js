const express=require('express');
const {dbConnect}=require("./config/db_connection")
const dotenv = require('dotenv').config();
const habitRoutes=require('./routes/HabitRoutes')
const habitErrorHandler=require('./middlewares/errorMiddlewares/habitErrorMiddleware')
dbConnect()
const app=express();
app.use(express.json())
app.use("/habit/",habitRoutes)
app.use(habitErrorHandler)
console.log("index")
app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`)
})