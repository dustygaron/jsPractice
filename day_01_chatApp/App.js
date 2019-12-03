const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const chatRouter = require('./routes/chatRoute')

// Require the http module
const http = require("http").Server(app)

// Require the socket.io module
const io = require('socket.io')

// Set port
const port = 3500

// Body parser middleware
app.use(bodyParser.json())

// Routes
app.use('/chats', chatRouter)

// Db connection
const Chat = require('./models/Chat')
const connect = require('./dbconnect')

//set the express.static middleware
app.use(express.static(__dirname + "/public"))

// Integrating socket io
const socket = io(http)


// Setup event listener
socket.on('connection', (socket) => {
  console.log('User connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  })

  // Someone is typing
  socket.on('typing', data => {
    socket.broadcast.emit('notifyTyping', {
      user: data.user,
      message: data.message
    })
  })

  // When someone stops typing
  socket.on('stop typing', () => {
    socket.broadcast.emit('notifyStopTyping')
  })

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);

    // Broadcast message to everyone in port:5000 except yourself
    socket.broadcast.emit('received', { message: msg })

    // Save chat to db
    connect.then(db => {
      console.log('Success connecting to server')

      let chatMessage = new Chat({
        message: msg,
        sender: 'Anonymous'
      })
      chatMessage.save()
    })
  })

}) // Close socket event listener

http.listen(port, () => {
  console.log('🏃‍♀️Running 🏃‍♀️ on port: ' + port);
})