var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	isbn: {type: String, required: true},
	title: {type: String, required: true},
	imageUrl: {type: String, required: true},
	author: {type: String, required: true},
	description: {type: String, required: true}
});

module.exports = mongoose.model('Book', schema);