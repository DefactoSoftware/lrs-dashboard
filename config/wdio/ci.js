const path = require('path');
const config = require('./defaults.js');

config.reporters = ['dot', 'junit'];
config.reporterOptions = {
  outputDir: path.join(process.env.CIRCLE_TEST_REPORTS || './', 'cucumber', 'junit.xml'),
  outputFileFormat: function(opts) { // optional
      return `results-${opts.cid}.${opts.capabilities}.xml`
  }
}

exports.config = config;
