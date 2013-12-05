
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.whatIsAMicropayment = function(req,res) {
	res.render('whatIsAMicropayment');
};

exports.history = function(req, res) {
	res.render('history');
};

exports.technical = function(req, res) {
	res.render('technical');
};

exports.social = function(req, res) {
	res.render('social');
};

exports.economical = function(req, res) {
	res.render('economical');
}
exports.payPerUse = function(req, res) {
	res.render('payPerUse');
}
exports.postPaid = function(req, res) {
	res.render('postPaid');
}
exports.prePaid = function (req, res) {
	res.render('prePaid');
}
exports.flattr = function (req, res) {
	res.render('flattr');
}
exports.paypal = function (req, res) {
	res.render('paypal');
}
exports.venmo = function (req, res) {
	res.render('venmo');
}
exports.zong = function (req, res) {
	res.render('zong');
}
