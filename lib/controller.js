var controller = exports;

controller.authn = require('./authn');

var waitingForUser;
var user;
var password;

controller.start = function(callback) {
	waitingForUser = true;
	callback("User: ");
};

controller.next = function(data, callback) {
 	if (waitingForUser) { 
		handleUserEntry(data, callback);
	} else {
		handlePasswordEntry(data, callback);
	}
};

var handleUserEntry = function(data, callback) {
	user = data
	waitingForUser = false;
	callback("Password: ");
};

var handlePasswordEntry = function(data, callback) {
	password = data;
	controller.authn.authenticate(user, password, function(authenticated) {
		if (authenticated) {
			callback("Welcome to the server\r\n");
		} else {
			waitingForUser = true;
			callback("Invalid login\r\nUser: ");
		}
	});
}
