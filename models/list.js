var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	listName: {type: String, required: true},
	creationDate: {type: String, required: true},
	userRef: {type: Schema.Types.ObjectId, ref: 'User', required:true},
	booksRef: [{type: Schema.Types.ObjectId, ref: 'Book'}]
});

module.exports = mongoose.model('List', schema);