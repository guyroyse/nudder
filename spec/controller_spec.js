describe("Controller", function() {

	var TEST_USER = 'test';
	var TEST_PASSWORD = 'password';

	var EMPTY_FUNCTION = function() {};

	var controller;

	beforeEach(function() {
		controller = require('../lib/controller')
	});

	it("asks for a user when started", function() {
		controller.start(function(response) {
			expect(response).toEqual("User: ");
		});
	});

	it("asks for a password when a user is entered", function() {
		controller.start(EMPTY_FUNCTION);
		controller.next(TEST_USER, function(response) {
			expect(response).toEqual("Password: ");
		});
	});

	it("displays the welcome message when user and password are good", function() {
		controller.authn = { authenticate : function(user, password, callback) { callback(true); } };
		controller.start(EMPTY_FUNCTION);
		controller.next(TEST_USER, EMPTY_FUNCTION);
		controller.next(TEST_PASSWORD, function(response) {
			expect(response).toEqual("Welcome to the server\r\n");
		});
	});

	it("displays an error message and asks for a new user when user and password are bad", function() {
		controller.authn = { authenticate : function(user, password, callback) { callback(false); } };
		controller.start(EMPTY_FUNCTION);
		controller.next(TEST_USER, EMPTY_FUNCTION);
		controller.next(TEST_PASSWORD, function(response) {
			expect(response).toEqual("Invalid login\r\nUser: ");
		});
	}); 

});
