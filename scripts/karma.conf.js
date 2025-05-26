const generate = require('videojs-generate-karma-config');

module.exports = function(config) {

  // see https://github.com/videojs/videojs-generate-karma-config
  // for options
  const options = {
    customLaunchers(defaults) {
      return Object.assign(defaults, {
        ChromeHeadlessNoSandbox: {
          base: 'ChromeHeadless',
          flags: ['--no-sandbox']
        }
      });
    }
  };

  config = generate(config, options);
  // any other custom stuff not supported by options here!

  return config;
};

