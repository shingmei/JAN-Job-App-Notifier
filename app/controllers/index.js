"use strict"

function factory(options) {
	return require('./routes')(options);
}

module.exports = factory;
