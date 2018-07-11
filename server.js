var http = require("http");
var express = require("express");
var app = express();

var server = http.createServer(app);

app.get('/forecast/', function(req, res){
	var body = JSON.stringify({
		summary: "Hot as, Fuck",
		temperature: 40
	});
	res.setHeader("Content-type", "application/json");
	res.send(body);
});

app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

console.log("Listening on http://127.0.0.1:8080");
server.listen('8080', '127.0.0.1');