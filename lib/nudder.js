var net = require('net');
var controller = require('./controller')

var nudder = exports;

nudder.start = function() {

	var server = net.createServer(function(socket) {

		var write_response = function(response) {
			socket.write(response);
		};

		socket.setEncoding('utf8');

		controller.start(write_response);
		socket.on('data', function(request) {
			controller.next(request, write_response);
		});

	});

	server.listen(8124);

};
