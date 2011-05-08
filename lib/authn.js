var crypto = require('crypto');

var users = {
	guy : '5f4dcc3b5aa765d61d8327deb882cf99',
	ben : '2ac9cb7dc02b3c0083eb70898e549b63'
};

var hashPassword = function(password) {
	return crypto.createHash('md5').update(password).digest('hex');
};

var authn = exports;

authn.authenticate = function(user, password) {
	return users[user] === hashPassword(password);
};


