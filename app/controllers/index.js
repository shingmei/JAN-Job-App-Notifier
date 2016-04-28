"use strict"

module.exports = function(options) {
	require('./routes')(options);
	require('./mailing')(options);
};
