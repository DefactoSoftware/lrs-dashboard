const config = require('wdio-cucumber-utilities');

config.specs = ['./features/**/*.feature'];
config.baseURL = process.env.APPLICATION_URL || 'http://localhost:3000'

if (process.env.DEBUG) {
  const timeout = (1000 * 60 * 60 * 24);
  config.debug = true;
  config.waitforTimeout = timeout;
  config.cucumberOpts.timeout = timeout;
}

exports.config = config;
