var imageScreenshotter = require('./imageScreenshotter.js');
var imageComparer = require('./imageComparer.js');
var Promise = require('bluebird');

function siteComparer(url) {

	return Promise.props({
		image1: imageScreenshotter(url, './tmp/images/img1.png'),
		image2: imageScreenshotter(url, './tmp/images/img2.png'),
	})
	.then(function () {
		return imageComparer('./tmp/images/img1.png', './tmp/images/img2.png');
	});
}

module.exports = siteComparer
