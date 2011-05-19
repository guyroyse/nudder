var models = exports;
models.mongoose = require('mongoose');

models.mongoose.connect('mongodb://localhost/nudder');

var Schema = models.mongoose.Schema;
var UserSchema = new Schema({
	username : String,
	password_hash : String
});

models.mongoose.model('User', UserSchema);

models.User = models.mongoose.model('User');
