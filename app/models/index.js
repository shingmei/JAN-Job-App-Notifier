module.exports = function(db) {
	var models = {};

	models.links = require('./links.js')(db);
	models.subscribers = require('./subscribers')(db);

	return models;
};
