"use strict"

function factory(db) {
	var subscribersModel = {};

	subscribersModel.getAllSubscribers = function() {
		return db.knex('subscribers');
	}
}

module.exports = factory;
