var server = require('./server');

var services = require('./app/services');

// return services.imageComparer('./google.png', './google2.png')
// .then(function (data) {
// 	console.log(data);
// });
server.start();
