var net = require('net');

var nudder = exports;

nudder.start = function() {

	var waitingForPassword = true;

	var server = net.createServer(function(socket) {
		socket.write("User: ");
		socket.on('data', function(data) {
			if (waitingForPassword) {
				socket.write("Password: ");
				waitingForPassword = false;
			} else {
				socket.write("Welcome to the server\r\n");
			}
		});
	});

	server.listen(8124);

};
