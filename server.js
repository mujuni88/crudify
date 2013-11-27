var express = require('express'),
    http = require('http'),
    path = require('path'),
    reload = require('reload'),
    mongo = require('mongoskin');

// create server
var app = express();

// connect to database
var db = mongo.db('localhost:27017/buza', {
    safe: true
});

var clientDir = path.join(__dirname, 'client');
app.configure(function() {
    app.set('port', process.env.PORT || 3000);

    // Middlewares
    app.use(express.logger('dev'));
    app.use(express.bodyParser()); // parses json, multipart
    app.use(app.router); // need to be explicity
    app.use(express.static(clientDir)); // should cache static assets

});

app.configure('development', function() {
    app.use(express.errorHandler());
});

// Paramaters
app.param('collectionName', function(req, res, next, collectionName) {
    req.collection = db.collection(collectionName);
    next();
});

app.param('id', function(req, res, next, id) {
    req.id = id;
    next();
});

/********************************************************
	Create - Http Post
 *******************************************************/

// insert document/s
app.post('/:collectionName', function(req, res, next) {
    req.collection.insert(req.body, {}, function(err, result){
    	// check for errors
    	if(err) return next(err);

    	// return result
    	res.send(result);
    });



});


// /********************************************************
// 	Read - Http Get
//  *******************************************************/

// retrieve all documents
app.get('/:collectionName', function(req, res, next) {
    req.collection.findItems(function(err, result) {
        // check for errors
        if (err) return next(err);

        // return result
        res.send(result);

    });



});

// retrieve single document
app.get('/:collectionName/:id', function(req, res, next) {
    req.collection.findById(req.id, function(err, result){
    	// check for errors
    	if (err) return next(err);

    	// return result
    	res.send(result);
    });



});

/********************************************************
	Update - Http Put
 *******************************************************/

// update single document
app.put('/:collectionName/:id', function(req, res, next) {
    req.collection.updateById(req.id, {$set:req.body},{safe:true, multi:false},function(err, result){
    	// check for errors
    	if (err) return next(err);

    	// return result
    	res.send((result == 1)?{msg:"success"}:{msg:"error"})
    });



});

/********************************************************
	Delete - Http Del
 *******************************************************/

// delete multiple documents
app.del('/:collectionName', function(req, res, next) {
    req.collection.remove(req.body,{},function(err, result) {
        // check for errors
        if (err) return next(err);

        // return result
        res.send((result == 1)?{msg:"success"}:{msg:"error"})

    });



});

// delete single document
app.del('/:collectionName/:id', function(req, res, next) {
    req.collection.removeById(req.id, function(err, result){
    	// check for errors
    	if (err) return next(err);

    	// return result
    	res.send((result == 1)?{msg:"success"}:{msg:"error"})
    });



});




var server = http.createServer(app);

// will automatically reload the server when any changes are detected
reload(server, app);

server.listen(app.get('port'), function() {
    console.log("Web server listening on port " + app.get('port'));
});
