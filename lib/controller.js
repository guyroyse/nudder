var controller = exports;

var waitingForPassword = true;
var user = '';
var password = '';

controller.init = function() {
	return "User: ";
};

controller.execute = function(data) {

	if (waitingForPassword) {
		user = data
		waitingForPassword = false;
		return "Password: ";
	} else {
		password = data
		if (user === 'guy' && password === 'password') {
			return "Welcome to the server\r\n";
		} else {
			waitingForPassword = false;
			return "Invalid login\r\nUser: ";
		}
	}

};
