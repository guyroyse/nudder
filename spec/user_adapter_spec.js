var user_adapter = require('../lib/user_adapter.js')

describe("User Adapter", function() {

	it("gets a user by name", function() {
		expect(user_adapter.get('guy').name).toEqual('guy');
	});

	it("gets a users password hash", function() {
		expect(user_adapter.get('guy').password_hash).toEqual('5f4dcc3b5aa765d61d8327deb882cf99');
	});

});
