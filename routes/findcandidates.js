var express = require('express');
var jobseeker = require('jobseeker');
var post = require('post');
var router = express.Router();

router.get('/', function(req, res) {
	var reqParam = {};
	reqParam.title = 'SMS Blast';
	
	if( typeof( req.query.jid ) != 'undefined' ){
		var thePost = new post();
		thePost.find({
			id: req.query.jid
		});
		thePost.on('find_error', function(err){
			reqParam.error = 'Failed to find job posting!';
			res.render('findcandidates', reqParam);
		}).on('find_success', function(rows){
			console.log(rows);
			reqParam.rows = rows[0]; // get only the first one
			res.render('findcandidates', reqParam);
		});
	}else{
		reqParam.error = 'Please select a job posting!';
		res.render('findcandidates', reqParam);
	}
	// console.log(req.query);
	
	// var js = new jobseeker();
	// js.find();
	// js.on('find_error', function(err){
		// reqParam.error = err.toString();
		// res.render('findcandidates', reqParam);
	// }).on('find_success', function(rows){
		// reqParam.rows = rows;
		// res.render('findcandidates', reqParam);
	// });
});

module.exports = router;
