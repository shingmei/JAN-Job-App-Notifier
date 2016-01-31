function factory(options) {
	return require('./routes.js')(options);
}

module.exports = factory;
