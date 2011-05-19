var user_adapter = exports;
user_adapter.models = require('./models');

user_adapter.get = function(name, callback) {
	user_adapter.models.User.findOne({ username: new RegExp(name, 'i') }, ['username', 'password_hash'], function (err, user) {
		callback(user);
	});
};
