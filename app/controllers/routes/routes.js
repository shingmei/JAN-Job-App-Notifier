"use strict"

function factory(options) {
	var express = require('express');
	var router = express.Router();

	router.get('/', function(req, res) {
		res.json('asdf');
	});

	return router;
}

module.exports = factory;
