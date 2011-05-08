var crypto = require('crypto');
var user_adapter = require('./user_adapter');

var hash_password = function(password) {
	return crypto.createHash('md5').update(password).digest('hex');
};

var authn = exports;

authn.authenticate = function(user, password) {
	return user_adapter.get(user).password_hash === hash_password(password);
};
