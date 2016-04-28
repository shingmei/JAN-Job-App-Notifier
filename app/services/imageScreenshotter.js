var Promise = require('bluebird');
var webshot = require('webshot');

function getScreenshot(url, file) {

	var webshotP = Promise.promisify(webshot);
	return webshotP(url, file)
	.then(function () {
		console.log('Screenshot of ', url, ' saved successfully to ', file);
	})
	.catch(function (err) {
		console.log('Screenshot of ', url, ' FAILED to save to', file, '\n', err);
	});
}

module.exports = getScreenshot;
