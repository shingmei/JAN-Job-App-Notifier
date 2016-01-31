"use strict"

function start() {
	var express = require('express');
	var app = express();

	var config = require('../config');

	app.set('port', config.PORT);

	app.listen(app.get('port'), function () {
		console.log('Node app is running on port', app.get('port'));
	});
}

module.exports.start = start;
