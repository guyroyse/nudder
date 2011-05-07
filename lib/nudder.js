var net = require('net');

var nudder = exports;

nudder.start = function() {

	var server = net.createServer(function(socket) {
		socket.write("Echo server\r\n");
		socket.pipe(socket);
	});

	server.listen(8124);

}
