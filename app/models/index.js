function factory(options) {
	var db = options.db;
	var models = {};

	models.links = require('./links.js')(options);

	return models;
}

module.exports = factory;
