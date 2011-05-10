var user_adapter = exports;
user_adapter.mongoose = require('mongoose');

user_adapter.mongoose.connect('mongodb://localhost/nudder');

var Schema = user_adapter.mongoose.Schema;
var UserSchema = new Schema({
	username : String,
	password_hash : String
});

user_adapter.mongoose.model('User', UserSchema);

var User = user_adapter.mongoose.model('User');

user_adapter.get = function(name, callback) {
	User.findOne({ username: new RegExp(name, 'i') }, ['username', 'password_hash'], function (err, user) {
		callback(user);
	});
};
