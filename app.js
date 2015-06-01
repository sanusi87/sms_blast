var http = require('http');

var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var debug = require('debug')('sms_blast');

var menu_routes = require('./routes/index');
var menu_messages = require('./routes/messages');
var menu_posts = require('./routes/post');
var menu_devices = require('./routes/devices');
var menu_findcandidates = require('./routes/findcandidates');
var menu_inbox = require('./routes/inbox');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', menu_routes);
app.use('/messages', menu_messages);
app.use('/posts', menu_posts);
app.use('/devices', menu_devices);
app.use('/findcandidates', menu_findcandidates);
app.use('/inbox', menu_inbox);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port',8001);
var server = http.createServer(app);
io = require('socket.io')(server);
server.listen(app.get('port'));

io.on('connection', function(socket){
	console.log('connected!');
});

module.exports = app;
