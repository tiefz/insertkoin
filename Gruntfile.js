module.exports = function( grunt ) {

  grunt.initConfig({

    // ## ## ## ## JAVASCRIPT - MINIFY ## ## ## ## //
    uglify : {
      options : {
        mangle : false
      },
      my_target : {
        files : {
          'custom/js/min/custom.min.js' : [ 'custom/js/custom.js' ]
        }
      }
    }, // uglify

      uglify: {
        options: {
           mangle: false
        },
        my_target: {
           files: [{
              expand: true,
              cwd: 'custom/_js',
              src: '**/*.js',
              dest: 'custom/js/',
              ext: '.min.js'
           }]
        }
      }, // uglify

    // ## ## ## ## CSS - SASS ## ## ## ## //
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: [{
              cwd: "custom/sass/",
              src: "*.{scss,sass}",
              dest: "custom/css/",
              expand: true,
              ext: ".css"
            }]
        }
    }, // sass

    cssmin: {
        target: {
          files: {
            'custom/css/custom.min.css': 'assets/custom/css/custom.css'
          }
        }
    }, // css min

    // ## ## ## ## HTML - JADE ## ## ## ## //
    //jade: {
    //  compile: {
    //    options: {
    //      client: false,
    //      pretty: true,
    //      data: {
    //        debug: true,
    //        timestamp: "<%= grunt.template.today() %>"
    //      }
    //    },
    //    files: [{
    //      cwd: "jade",
    //      src: "**/*.jade",
    //      dest: "",
    //      expand: true,
    //      ext: ".html"
    //    }]
    //  }
    //}, // jade

    // ## ## ## ## IMAGE COMPACT ## ## ## ## //
    imagemin: {
      png: {
         options: {
            optimizationLevel: 1
         },
         files: [{
            expand: true,
            cwd: 'custom/_img/',
            src: ['**/*.png'],
            dest: 'custom/img/'
         }]
      },
      jpg: {
         options: {
            progressive: true
         },
         files: [{
            expand: true,
            cwd: 'custom/_img/',
            src: ['**/*.jpg'],
            dest: 'custom/img/'
         }]
      }
    }, // Imagemin

    // ## ## ## ## SERV ## ## ## ## //
    watch: {
      options: {
        livereload: true
      },
      
      // JS
      js: {
        files: ['custom/js/*.js'],
        tasks: ["uglify"]
        // tasks: ["uglify"]
      },

      // CSS
      css: {
        files: ['custom/sass/**/*.{scss,sass}'],
        tasks: ['sass', 'cssmin']
      },

      // HTML
      //html: {
      //  files: "jade/**/*.jade",
      //  tasks: "jade"
      //}

    }, // watch

    connect: {
      server: {
        options: {
          port: 9090,
          base: '.',
          hostname: "localhost",
          livereload: true,
          open: true
        }
      }
    } // connect

  }); // grunt.initConfig

  // JS
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // CSS
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // HTML
  //grunt.loadNpmTasks('grunt-contrib-jade');

  // IMAGE COMPACT
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  
  // SERV
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Task Defult
  // grunt.registerTask( 'default', [ 'uglify', 'sass', 'cssmin', 'jade'] );
  grunt.registerTask( 'default', [ 'uglify', 'sass', 'cssmin'] );

  // Task Custom
  grunt.registerTask( 'w', [ 'connect', 'watch' ] );

};