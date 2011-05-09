var authn = exports;

authn.crypto = require('crypto');
authn.user_adapter = require('./user_adapter');

var hash_password = function(password) {
	return authn.crypto.createHash('md5').update(password).digest('hex');
};

authn.authenticate = function(username, password) {
	var user = authn.user_adapter.get(username);
	if (user) return user.password_hash === hash_password(password);
	return false;
};
