module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
        jshint: {
          all: ['Gruntfile.js', 'app/js/**/*.js'],
          options: { "browser" : true
                   }
        }
    copy : {
     files : {
       expand : true,
       cwd : './',
       src : [
         'index.html', 'app/**', 'bower_components/**'
        ],
       dest : 'target/build/'
       }
     },
     clean : {
       files : [ "target/build/", "target/release" ]
      },
    watch: {
      scripts: {
      files: ['app/js/**/*.js'],
      tasks: ['jshint'],
      },
    },
  });
 
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'clean', 'copy']);
};
