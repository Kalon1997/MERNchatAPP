const mongoose = require('mongoose')
module.exports = async () => {
    try{
        const connectionParams = {
            useNewUrlParser:true,
            useCreateIndex:true,
            useUnifiedTopology:true
        }
        await mongoose.connect(
            //"mongodb+srv://kalon:kalon123@cluster0.t0gzi.mongodb.net/Mychatapp?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true",
            process.env.URI,
            connectionParams
        )
        console.log("db connected");
    }
    catch(err)
    {
        console.log("db NOT connected");
    }
}