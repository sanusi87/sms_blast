var express = require('express');
var inbox = require('inbox');
var router = express.Router();

router.get('/', function(req, res) {
	var reqParam = {};
	reqParam.title = 'SMS Blast - Inbox';

	var inb = new inbox();
    inb.find();

    inb.on('find_error', function(err){
		reqParam.error = err.error;
		res.render('index', reqParam);
	}).on('find_success', function(rows){
		console.log(rows);
		reqParam.rows = rows;
		res.render('index', reqParam);
	});
});


module.exports = router;
