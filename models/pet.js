var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Pet', {
	personal: {type: Schema.Types.ObjectId , ref: 'Personal'},
	name : String,
	type: String,
	indoor: Boolean,
	age : Number
});