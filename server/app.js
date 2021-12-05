const express = require('express')
const app = express()
const passport = require('passport')
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const cors = require('cors')

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
require('./config/passport')
app.use(passport.initialize())
app.use(cors({
    origin: process.env.CLIENT_ADDRESS,
}))
// routes
const authRoutes = require('./routes/auth')
const listRoutes = require('./routes/list')
const profileRoutes= require('./routes/profile')
app.use(authRoutes)
app.use(listRoutes)
app.use(profileRoutes)

// db connections
require('./config/db')


//listener  
app.listen(process.env.PORT, () =>{
    console.log(`listening to port ${process.env.PORT}`)
})