describe("Controller", function() {

	var TEST_USER = 'test';
	var TEST_PASSWORD = 'password';

	var controller;

	beforeEach(function() {
		controller = require('../lib/controller')
	});

	it("asks for a user when started", function() {
		expect(controller.start()).toEqual("User: ");
	});

	it("asks for a password when a user is entered", function() {
		controller.start();
		expect(controller.next(TEST_USER)).toEqual("Password: ");
	});

	it("displays the welcome message when user and password are good", function() {
		controller.authn = { authenticate : function() { return true; } };
		controller.start();
		controller.next(TEST_USER);
		expect(controller.next(TEST_PASSWORD)).toEqual("Welcome to the server\r\n");
	});

	it("displays an error message and asks for a new user when user and password are bad", function() {
		controller.authn = { authenticate : function() { return false; } };
		controller.start();
		controller.next(TEST_USER);
		expect(controller.next(TEST_PASSWORD)).toEqual("Invalid login\r\nUser: ");
	}); 

});
