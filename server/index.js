const http = require('http')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const jsonparser = require('json-parser')
const express = require('express')
const socketIO = require('socket.io')
const app = express();

const server = http.createServer(app);
const allRoutes = require('./Routes.js')
require("dotenv").config({ path: __dirname + "/config/config.env" });
const cors = require('cors')
const connection = require('./db.js')
connection();

const corsConfig = {
    credentials: true,
    origin: true,
};
app.use(cors(corsConfig));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
app.use(bodyParser())

app.use('/api/v1',allRoutes);

var users = []

const io = socketIO(server);

io.on("connection",(socket)=>{

    socket.on("joined", (args) => {
        // socket.emit("sentmsg", args.username + " joined just now ");
        users[socket.id] = args;
        console.log(users[socket.id].username + " joined just now ")
    })
 
socket.on("MSGG", (ms) => {
    io.emit("RECEIVEDMSG", ms);
})

});



server.listen(process.env.PORT, () => {
    console.log(`listening @ ${process.env.PORT}`)
})
