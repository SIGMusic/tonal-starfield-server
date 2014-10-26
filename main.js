/**
 * CONSTANTS
 */
PORT = 8080;

/**
 * IMPORTS
 */
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

/**
 * ROUTES
 */
// serve static content
app.use('/', express.static(__dirname + '/views'));

/**
 * SOCKETS
 */
io.on('connection', function(socket){
	socket.on('play-note', function(data){
		io.emit('play-note', {});
	})
})

/**
 * START SERVER
 */
server.listen(PORT, function listenCallback() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Listening at http://%s:%s', host, port)
});