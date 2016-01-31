function factory(config) {
	var db = require('knex')({
		client: 'pg',
		connection: config.DATABASE_URL
	});

	return db;
}

module.exports = factory;
