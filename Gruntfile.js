module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        jshint: {
            client: [
                'public/js/**/*.js',
                '!public/js/vendor'
            ]
        },

        less: {
            compile: {
                files: {
                    'build/css/compiled.css': 'public/css/**/*.less'
                }
            }
        },

        concat: {
            js: {
                files: {
                    'build/js/bundle.js': 'public/js/**/*.js'
                }
            }
        },

        uglify: {
            bundle: {
                files: {
                    'build/js/bundle.min.js': 'build/js/bundle.js'
                }
            }
        },

        sprite: {
            icons: {
                src: 'public/img/icons/*.png',
                dest: 'build/img/icons.png',
                destCss: 'build/css/icons.css'
            }
        },

        clean: {
            js: 'build/js',
            css: 'build/css',
            less: 'public/**/*.css'
        },

        timestamp: {
            options: {
                file: 'build/.timestamp'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-spritesmith');

    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('js', 'Concatinate and minify static JS assets', ['concat:js', 'uglify:bundle']);

    // Custom Grunt task
    grunt.registerTask('timestamp', function() {
        // take configuration and provide sensible defaults
        var options = this.options({
            file: '.timestamp'
        });

        var timestamp = +new Date();
        var contents = timestamp.toString();

        // create a file in the location provided
        grunt.file.write(options.file, contents);
    });
};
