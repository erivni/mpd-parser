const generate = require('videojs-generate-karma-config');

module.exports = function(config) {

  // see https://github.com/videojs/videojs-generate-karma-config
  // for options
  const options = {};

  config = generate(config, options);
  // any other custom stuff not supported by options here!

  config.customLaunchers = {
    ChromeHeadlessNoSandbox: {
      base: 'ChromeHeadless',
      flags: ['--no-sandbox']
    }
  };

  // Force usage of the custom launcher
  config.browsers = ['ChromeHeadlessNoSandbox'];

  return config;
};

