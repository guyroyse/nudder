var user_adapter = require('../lib/user_adapter.js')

describe("User Adapter", function() {

	var TEST_USER = 'guy';
	var TEST_HASH = '5f4dcc3b5aa765d61d8327deb882cf99';

	it("gets a user by name", function() {
		expect(user_adapter.get(TEST_USER)).toBeDefined();
	});

	it("gets a user with a name", function() {
		expect(user_adapter.get(TEST_USER).name).toEqual(TEST_USER);
	});

	it("gets a user with a password hash", function() {
		expect(user_adapter.get(TEST_USER).password_hash).toEqual(TEST_HASH);
	});

	it('returns null for a user that is not found', function() {
		expect(user_adapter.get('yug')).toBeNull();
	});

	it("gets a user by a name case-insensitively", function() {
		var user = user_adapter.get('GUY');
		expect(user).not.toBeNull();
		expect(user.name).toEqual(TEST_USER);
		expect(user.password_hash).toEqual(TEST_HASH);
	});

});
