describe('Authentication', function() {

	var TEST_USER = 'user';
	var TEST_PASSWORD = 'password';
	var TEST_HASH = '5f4dcc3b5aa765d61d8327deb882cf99';
	var BAD_USER = 'yug';
	var BAD_PASSWORD = 'drowssap';

	var authn;

	beforeEach(function() {
		authn = require('../lib/authn');
		authn.user_adapter = {
			get : function() {
				return { password_hash : TEST_HASH };
			}
		};
	});

	it("returns true when handed a user and password", function() {
		expect(authn.authenticate(TEST_USER, TEST_PASSWORD)).toBeTruthy();
	});

	it("returns false when handed a user and bad password", function() {
		expect(authn.authenticate(TEST_USER, BAD_PASSWORD)).toBeFalsy();
	});

	it("returns false when handed a bad user", function() {
		authn.user_adapter.get = function() { return null; };
		expect(authn.authenticate(BAD_USER, TEST_PASSWORD)).toBeFalsy();
	});

});
