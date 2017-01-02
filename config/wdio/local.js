const config = require('./defaults');

config.services = ['selenium-standalone', ...config.services];

exports.config = config;
