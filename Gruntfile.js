var path = require('path'),
    extend = require('deap').extend,
    config = {};

// combine all the grunt configs from grunt/configs
require('fs').readdirSync('./grunt/configs').forEach(function(file) {
  if (path.extname(file) === '.js') {
    extend(config, require('./grunt/configs/' + file));
  }
});

module.exports = function(grunt) {
  // init grunt config
  grunt.initConfig(config);
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.registerTask('test-unit', ['mochaTest:unit']);
};
