describe("User Adapter", function() {

	var TEST_USER = 'guy';
	var TEST_HASH = '5f4dcc3b5aa765d61d8327deb882cf99';

	var user_adapter;

	describe("gets a user", function() {
	
		beforeEach(function() {
			user_adapter = require('../lib/user_adapter');
			user_adapter.models = {
				User : {
					findOne : function(query, fields, callback) {
						callback(null, {username: TEST_USER, password_hash: TEST_HASH});
					}
				} 
			};
		});

		it("gets a user by name", function() {
			user_adapter.get(TEST_USER, function(user) {
				expect(user).toBeDefined();
			});
		});

		it("gets a user with a name", function() {
			user_adapter.get(TEST_USER, function(user) {
				expect(user.username).toEqual(TEST_USER);
			});
		});

		it("gets a user with a password hash", function() {
			user_adapter.get(TEST_USER, function(user) {
				expect(user.password_hash).toEqual(TEST_HASH);
			});
		});

		it("gets a user by a name case-insensitively", function() {
			user_adapter.get('GUY', function(user) {
				expect(user.username).toEqual(TEST_USER);
			});
		});

	});

	describe("not found", function() {

		beforeEach(function() {
			user_adapter.models = {
				User : {
					findOne : function(query, fields, callback) {
						callback(null, null);
					}
				} 
			};
		});

		it("returns null when getting an invalid user", function() {
			user_adapter.get('yug', function(user) {
				expect(user).toBeNull();
			});
		});

	});

});
