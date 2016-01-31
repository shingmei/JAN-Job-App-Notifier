"use strict"

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.json('asdf');
});

var nodemailer = require('nodemailer');
var generator = require('xoauth2').createXOAuth2Generator({
      user: "janzazzle@gmail.com",
      clientId: "67599010361-rcp0bm1s62gfpcithkk41phjb3el44dv.apps.googleusercontent.com",
      clientSecret: "OP_DjDhJn1fqFNQ_u046drN3",
      refreshToken: "1/et4CADLzM3_Qsn8oXt0S7CR1CzY6A_7C9STFA1ixjeU"
});

router.get('/send', handleSendEmailRequest);

function handleSendEmailRequest(req, res) {
	
	generator.on('token', function(token){
	    console.log('New token for %s: %s', token.user, token.accessToken);
	});
	
	// login
	var transporter = nodemailer.createTransport(({
	    service: 'gmail',
	    auth: {
	        xoauth2: generator
	    }
	}));
	
	// send mail
	transporter.sendMail({
	    from: 'janzazzle@gmail.com',
	    to: 'chowshingmei@gmail.com,justingling@gmail.com',
	    subject: 'Testing',
	    text: 'Authenticated with OAuth2!'
	}, function(error, response) {
	   if (error) {
	        res.json(error);
	   } else {
	        res.json('Message sent');
	   }
	});
}

module.exports = router;
