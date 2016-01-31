"use strict"

var config = {};

config.PORT = process.env.PORT || '5000';

// TODO also local dev database
config.DATABASE_URL = process.env.DATABASE_URL || 'postgres://postgres:1234@localhost/jan_dev';

module.exports = config;
