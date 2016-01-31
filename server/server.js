"use strict"

function start() {
	var express = require('express');
	var app = express();
	var bodyParser = require('body-parser');

	var config = require('../config');

	app.use(bodyParser.urlencoded({ extended : true}));
	app.use(bodyParser.json());
	app.set('port', config.PORT);
	var controllers = require('../app/controllers');
	app.use(controllers);

	app.listen(app.get('port'), function () {
		console.log('Node app is running on port', app.get('port'));
	});
}

module.exports.start = start;
