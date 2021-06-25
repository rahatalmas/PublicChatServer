const { Socket } = require('dgram');
var express = require ('express');
var socket = require('socket.io');
//app setup
var app = express();
var server = app.listen(8080,()=>{
console.log("listening")});

//middleware
app.use(express.static('public'));

//socket setup
var io = socket(server);
io.on('connection',(socket)=>{
      console.log('socket connected');
      socket.on('chat',(data)=>{
          io.sockets.emit('chat',data);
      });
});


