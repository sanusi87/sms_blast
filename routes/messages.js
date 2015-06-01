var express = require('express');
var router = express.Router();
var message = require('message');

/* GET users listing. */
router.get('/', function(req, res) {
	var reqParam = {};
	reqParam.title = 'SMS Blast - Messages';

	var msg = new message();
	msg.find();

	msg.on('find_error', function(err){
		reqParam.error = err.error;
		res.render('messages', reqParam);
	}).on('find_success', function(rows){
		reqParam.rows = rows;
		res.render('messages', reqParam);
	});
});

module.exports = router;
