var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Occupant', {
	personal: {type: Schema.Types.ObjectId , ref: 'Personal'},
	name : String,
	relation: String,
	occupation: String,
	age : Number
});