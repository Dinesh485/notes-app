const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: {
        type: String        
    },
    password: {
        type : String
    },
    list:{
        type: String
    },
    profile_img: {
        type: Object
    }
})

const User = mongoose.model('user', userSchema)

module.exports = User