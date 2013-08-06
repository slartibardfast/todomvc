module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
        jshint: {
          all: ['Gruntfile.js', 'app/js/**/*.js'],
          options: { "browser" : true
                   }
        }
    watch: {
      scripts: {
      files: ['app/js/**/*.js'],
      tasks: ['jshint'],
      },
    },
  });
 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint']);
};
