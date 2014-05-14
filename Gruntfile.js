module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        ignores : ['js/vendor/*', 'js/config.js'],
        src: ['js/scripts/*.js']
      }
    },

  // compass: {                  // Task
  //     options: {              // Target options
  //       sassDir: 'stylesheets/sass',
  //       cssDir: 'stylesheets',
  //       environment: 'production'
  //     }
  // },

  sass : {
    development : {
      options: {
        // compress          : true,
        // sourceMap         : true,
        // sourceMapFilename : 'main.css.map'
        // style: 'expanded'
      },
      files: {
        "stylesheets/main.css": "stylesheets/sass/main.scss"
      }
    }
    },

  watch : {
    options : {
      livereload: true,
      keepalive: true
    },
    styles : {
      files: ['*.sass'],
      tasks : ['sass']
    },
    js : {
      files : ['js/**/*.js'],
      tasks : ['jshint']
    }
  },


    connect : {
      server: {
        options: {
          port: 9090
          // keepalive: true
        }
      }
    }
  });

  // // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');

  // // Default task(s).
  // grunt.registerTask('default', ['uglify']);

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['connect', 'sass', 'watch', 'compass']);


};