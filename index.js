var express = require('express');
var socket = require('socket.io');


//App setup
var app = express();
var server = app.listen(4000,function(){
	console.log('server is started');
});

app.use(express.static('public'));

// socket server 
var io = socket(server);

io.on('connection',function(socket){
	console.log('connection with id ',socket.id);

	socket.on('chat',function(data){
		io.sockets.emit('chat',data);
	});

	socket.on('feedback',function(data){
		socket.broadcast.emit('feedback',data);
	});
});
