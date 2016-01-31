function factory(options) {
	return require('./db')(options);
}

module.exports = factory;
