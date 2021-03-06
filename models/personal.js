var mongoose = require('mongoose');

module.exports = mongoose.model('Personal', {
	fname : String,
	mname: String,
	lname: String,
	ssn : String,
	dob : {type:Date},
	who : String,
	dl: String,
	state : String,
	phonec : String,
	phonew : String,
	ext : String,
	email : String,
	paddress : String,
	pcity : String,
	pstate : String,
	pzip : String,
	plot : String,
	plandlord: String,
	llphone: String,
	rfl: String,
	aor: String,
	wyrutd: {type :Boolean},
	paddress2 : String,
	pcity2 : String,
	pstate2 : String,
	pzip2 : String,
	plot2 : String,
	plandlord2: String,
	llphone2: String,
	rfl2: String,
	aor2:String,
	wyrutd2: {type :Boolean},
	cscore : Number

});