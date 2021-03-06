var express = require('express');
var post = require('post');
var router = express.Router();

router.get('/', function(req, res) {
	var reqParam = {};
	reqParam.title = 'SMS Blast - Jobs';

	var thePost = new post();
	thePost.find();

	thePost.on('find_error', function(err){
		reqParam.error = err.error;
		res.render('index', reqParam);
	}).on('find_success', function(rows){
		console.log(rows);
		reqParam.rows = rows;
		res.render('index', reqParam);
	});
});

module.exports = router;
