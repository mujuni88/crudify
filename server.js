var express = require('express'),
    http = require('http'),
    path = require('path'),
    reload = require('reload');

var app = express();

var clientDir = path.join(__dirname, 'client');
console.log(clientDir);

app.configure(function() {
	app.set('port', process.env.PORT || 3000);
	app.use(express.logger('dev'));
	app.use(express.bodyParser()); // parses json, multipart
	app.use(app.router); // need to be explicity
	app.use(express.static(clientDir)); // should cache static assets

});

app.configure('development', function(){
	app.use(express.errorHandler());
});

var server = http.createServer(app);

// will automatically reload the server when any changes are detected
reload(server, app);

server.listen(app.get('port'), function(){
	console.log("Web server listening on port " + app.get('port'));
});