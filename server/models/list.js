const mongoose = require('mongoose')

const listSchema = mongoose.Schema({
    items:{
        type: Array
    }
})

const List =mongoose.model('list', listSchema)

module.exports = List