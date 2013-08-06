module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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
     requirejs : {
       compile : {
         options : {
           appDir : 'target/build',
           baseUrl : '.',
           dir : 'target/release',
           mainConfigFile : 'app/js/main.js',
           modules : [
             {
               name : "app/js/app",
             }
           ],
           preserveLicenseComments : false,
           generateSourceMaps : true,
           optimize : "uglify2"
         }
       }
     },
    jshint: {
      all: ['Gruntfile.js', 'app/js/**/*.js'],
       options: {
                   "browser" : true
                }
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
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('default', ['jshint', 'clean', 'copy', 'requirejs']);
};
