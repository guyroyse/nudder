var authn = require('../lib/authn')

describe('Authentication', function() {

	var VALID_USER = 'guy';
	var VALID_PASSWORD = 'password';
	var INVALID_USER = 'yug';
	var INVALID_PASSWORD = 'drowssap';
	var DIFFERENT_VALID_USER = 'ben'
	var DIFFERENT_VALID_PASSWORD = 'Password1';

	it("returns true when handed a valid user and password", function() {
		expect(authn.authenticate(VALID_USER, VALID_PASSWORD)).toBeTruthy();
	});

	it("returns false when handed a valid user and invalid password", function() {
		expect(authn.authenticate(VALID_USER, INVALID_PASSWORD)).toBeFalsy();
	});

	it("returns false when handed an invalid user and a valid password", function() {
		expect(authn.authenticate(INVALID_USER, VALID_PASSWORD)).toBeFalsy();
	});

	it("returns false when handed an invalid user and password", function() {
		expect(authn.authenticate(INVALID_USER, INVALID_PASSWORD)).toBeFalsy();
	});

	it("returns true when handed a different valud user and password", function() {
		expect(authn.authenticate(DIFFERENT_VALID_USER, DIFFERENT_VALID_PASSWORD)).toBeTruthy();
	});

});
