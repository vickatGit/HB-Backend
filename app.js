const express=require('express');
const {dbConnect}=require("./src/config/db_connection")
const dotenv = require('dotenv').config();
const habitRoutes=require('./src/routes/HabitRoutes')
const authRoutes=require('./src/routes/AuthRoutes')
const socialRoutes=require('./src/routes/SocialRoutes')
const habitErrorHandler=require('./src/middlewares/errorMiddlewares/habitErrorMiddleware')
const authErrorHandler=require('./src/middlewares/errorMiddlewares/AuthErrorMiddleware')
dbConnect()
const app=express();
app.get("/",(req,res) => {
    res.status(200).send("Server Health is Good 👍👍")
})
app.use(express.json())
app.use("/auth/",authRoutes)
app.use(authErrorHandler)
app.use("/habit/",habitRoutes)
app.use(habitErrorHandler)
app.use("/social/",socialRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`)
})