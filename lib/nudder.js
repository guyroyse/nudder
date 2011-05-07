var net = require('net');

var nudder = exports;

nudder.start = function() {

	var waitingForPassword = true;
	var user = '';
	var password = '';

	var server = net.createServer(function(socket) {
		socket.setEncoding('utf8');
		socket.write("User: ");
		socket.on('data', function(data) {
			if (waitingForPassword) {
				user = data
				socket.write("Password: ");
				waitingForPassword = false;
			} else {
				password = data
				if (user === 'guy' && password === 'password') {
					socket.write("Welcome to the server\r\n");
				} else {
					socket.write("Invalid login\r\nUser: ");
					waitingForPassword = false;
				}
			}
		});
	});

	server.listen(8124);

};
