var server = require('./server');

var services = require('./app/services');

return services.siteComparer('www.google.com')
.then(function (imagesEqual) {
	console.log(imagesEqual);
	server.start();
});

