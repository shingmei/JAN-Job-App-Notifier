var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.json('asdf');
});

app.listen(5000);
