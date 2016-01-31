var server = require('./server');
var Promise = require('bluebird');

var services = require('./app/services');

return Promise.props({
	image1: services.imageScreenshotter('www.bing.com', './bing.png'),
	image2: services.imageScreenshotter('www.google.com', './google.png'),
})
.then(function () {
	return services.imageComparer('./google.png', './bing.png');
})
.then(function (imagesEqual) {
	console.log(imagesEqual);
	server.start();
})


// return services.imageComparer('./google.png', './google2.png')
// .then(function (data) {
// 	console.log(data);
// });

	// server.start();
