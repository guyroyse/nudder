var net = require('net');
var controller = require('./controller')

var nudder = exports;

nudder.start = function() {

	var server = net.createServer(function(socket) {
		socket.setEncoding('utf8');
		socket.write(controller.init());
		socket.on('data', function(data) {
			socket.write(controller.execute(data));
		});
	});

	server.listen(8124);

};
