module.exports = {
  mochaTest: {
    unit: {
      options: {
        timeout: 1000,
        slow: 500,
        ignoreLeaks: false,
        ui: 'bdd',
        reporter: 'spec'
      },
      src: ['test/**/*.js']
    }
  }
};
