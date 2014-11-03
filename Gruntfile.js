module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');


  grunt.initConfig({
    jshint: {
      target1: ['routes.js', 'server.js', 'test/api_test.js']
    },

    simplemocha: {
      target1: ['routes.js', 'server.js', 'test/api_test.js']
    }

  });


  grunt.registerTask('test', ['jshint', 'simplemocha']);
  grunt.registerTask('default',  ['test']);
};
