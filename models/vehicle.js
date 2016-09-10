var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Vehicle', {
	personal: {type: Schema.Types.ObjectId , ref: 'Personal'},
	color: String,
	make: String,
	model: String,
	year : Number,
	plate : String,
	state : String
});