/*
var message = require('message');
var msg = new message();
msg.find();
msg.on('find_error', function(err){
	console.log('--error--');
	console.log(err);
}).on('find_success', function(rows){
	console.log('--success--');
	console.log(rows);
});
*/

var post = require('post');
var item = new post();
item.find();
item.on('find_error', function(err){
	console.log('--error--');
	console.log(err);
}).on('find_success', function(rows){
	console.log('--success--');
	console.log(rows);
});