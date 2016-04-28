module.exports = function(config) {
	var db = require('knex')({
		client: 'pg',
		connection: config.DATABASE_URL
	});

	return db;
};
