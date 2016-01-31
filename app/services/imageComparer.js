var resemble = require('resemblejs');
var fsp = require('fs-promise');
var Promise = require('bluebird');
var fs = require('fs');
var bufferEqual = require('buffer-equal');
var crypto = require('crypto');

function compareImages(file1, file2) {

	// Get the node buffer of the two image files
	return Promise.props({
		f1data: fsp.readFile(file1),
		f2data: fsp.readFile(file2)
	})

	// Check whether the two images are equal
	.then(function (result) {
		var f1hash = crypto.createHash('sha256').update(result.f1data).digest('hex');
		var f2hash = crypto.createHash('sha256').update(result.f2data).digest('hex');

		// console.log(f1hash);
		// console.log(f2hash);

		return Promise.resolve( f1hash === f2hash );

		// return Promise.resolve(bufferEqual(result.f1data, result.f2data));
	});
}

module.exports = compareImages;
