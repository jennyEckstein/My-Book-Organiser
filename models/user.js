var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	firstName: {type: String, required: true},
	lastName: {type: String, required: true},
	email: {type: String, required: true},
	password: {type: String, required: true},
	lists: [{type: String}]
	//lists: [{type: String}]
});

module.exports = mongoose.model('User', schema);