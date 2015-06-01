var express = require('express');
var message = require('message');
var post = require('post');
var router = express.Router();

router.get('/', function(req, res) {
	var reqParam = {};
	reqParam.title = 'SMS Blast';
	
	var msg = new message();
	msg.find();
	
	msg.on('find_error', function(err){
		reqParam.error = err;
		res.render('index', reqParam);
	}).on('find_success', function(rows){
		reqParam.rows = rows;
		res.render('index', reqParam);
	});
});

module.exports = router;
