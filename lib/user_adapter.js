var user_adapter = exports;

var users = {
	guy : '5f4dcc3b5aa765d61d8327deb882cf99',
	ben : '2ac9cb7dc02b3c0083eb70898e549b63'
};

user_adapter.get = function(name) {
	return { name : name, password_hash : users[name] };
};
