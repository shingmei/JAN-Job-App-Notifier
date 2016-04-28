"use strict"

function factory(options) {
	var app = options.app;

	app.get('/', function(req, res) {
		res.json('asdf');
	});
}

module.exports = factory;

