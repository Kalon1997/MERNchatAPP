const Mongoose = require('mongoose')

const chatSchema = new Mongoose.Schema({
    chatName: String,
    members: [],
    messages: [],
    chatCreator: String

})

module.exports = Mongoose.model("Chat", chatSchema);