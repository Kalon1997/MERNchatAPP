const Mongoose = require('mongoose')

const chatSchema = new Mongoose.Schema({
    chatName: String,
    members: String,  //for now only 1 person
    messages: [],
    chatCreator: String

})

module.exports = Mongoose.model("Chat", chatSchema);