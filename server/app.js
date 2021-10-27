const express = require('express')
const app = express()
const passport = require('passport')
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
require('./config/passport')
app.use(passport.initialize())

// routes
const authRoutes = require('./routes/auth')
const privateRoutes = require('./routes/private')
app.use(authRoutes)
app.use(privateRoutes)

// db connections
require('./config/db')


//listener  
app.listen(process.env.PORT, () =>{
    console.log(`listening to port ${process.env.PORT}`)
})