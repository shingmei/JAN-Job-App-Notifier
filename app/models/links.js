"use strict"

function factory(db) {
}

module.exports = function (db) {
	var linksModel = {};
	var Promise = require('bluebird');

	/*
	 *	Gets the current page hash of a given page url
	 */
	linksModel.getCurrentLinkHash = function(url) {
		return db.knex('links')
			.where('url', url)
			.then(function (result) {
				var link = result[0];
				return link.pageHash;
			});
	}

	return linksModel;
};
