var resemble = require('resemblejs');
var fsp = require('fs-promise');
var Promise = require('bluebird');
var fs = require('fs');
var bufferEqual = require('buffer-equal');

function compareImages(file1, file2) {

	// Get the node buffer of the two image files
	return Promise.props({
		f1data: fsp.readFile(file1),
		f2data: fsp.readFile(file2)
	})

	// Check whether the two images are equal
	.then(function (result) {
		return Promise.resolve(bufferEqual(result.f1data, result.f2data));
	});
}

module.exports = compareImages;
