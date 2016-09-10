var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Occupant', {
	personal: {type: Schema.Types.ObjectId , ref: 'Personal'},
	cemployer : String,
	hweek : String,
	yphone : String,
	yemployed : String,
	address : String,
	ecity : String,
	estate: String,
	ezip : String
});






