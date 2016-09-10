var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Income', {
	personal: {type: Schema.Types.ObjectId , ref: 'Personal'},
	proof: String,
	source: String,
	cincome : Number
});