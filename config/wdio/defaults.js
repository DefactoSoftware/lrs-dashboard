const path = require('path');
const glob = require('glob');
const config = require('wdio-cucumber-utilities');

if (process.env.DEBUG) {
  const timeout = (1000 * 60 * 60 * 24);
  config.debug = true;
  config.waitforTimeout = timeout;
  config.cucumberOpts.timeout = timeout;
}

config.specs = ['./features/**/*.feature'];
config.baseURL = process.env.APPLICATION_URL || 'http://localhost:3000'

config.services = [
  'spa-server'
];

config.spaServer = {
  path: './build',
  port: 8080,
  fallback: 'index.html',
}

const stepDefinitionsFiles = glob.sync(
  path.join(__dirname, '../../features/step_definitions/**/*.js')
);
const supportFiles = glob.sync(
  path.join(__dirname, '../../features/support/**/*.js')
);

config.cucumberOpts.require = config.cucumberOpts.require.concat(stepDefinitionsFiles)
                                                         .concat(supportFiles);

module.exports = config;
