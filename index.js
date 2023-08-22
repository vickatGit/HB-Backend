const express=require('express');
const {dbConnect}=require("./config/db_connection")
const dotenv = require('dotenv').config();
const habitRoutes=require('./routes/HabitRoutes')
const socialRoutes=require('./routes/SocialRoutes')
const authRoutes=require('./routes/AuthRoutes')
const habitErrorHandler=require('./middlewares/errorMiddlewares/habitErrorMiddleware')
const authErrorHandler=require('./middlewares/errorMiddlewares/AuthErrorMiddleware')
dbConnect()
const app=express();
app.use(express.json())
app.use("/auth/",authRoutes)
app.use(authErrorHandler)
app.use("/habit/",habitRoutes)
app.use(habitErrorHandler)
app.use("/social/",socialRoutes)
console.log("index")
app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`)
})