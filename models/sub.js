const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    query: Object
})

module.exports = mongoose.model('Subs',authorSchema)
