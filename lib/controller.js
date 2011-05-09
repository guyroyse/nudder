var controller = exports;

controller.authn = require('./authn');

var waitingForUser;
var user;
var password;

controller.start = function() {
	waitingForUser = true;
	return "User: ";
};

controller.next = function(data) {
 	if (waitingForUser) return handleUserEntry(data);
	return handlePasswordEntry(data);
};

var handleUserEntry = function(data) {
	user = data
	waitingForUser = false;
	return "Password: ";
};

var handlePasswordEntry = function(data) {
	password = data;
	if (controller.authn.authenticate(user, password)) {
		return "Welcome to the server\r\n";
	} else {
		waitingForUser = true;
		return "Invalid login\r\nUser: ";
	}
}
