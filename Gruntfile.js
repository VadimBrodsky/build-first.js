module.exports = function(grunt) {
    grunt.initConfig({
        jshint: ['Gruntfile.js'],

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
            js: {
                files: {
                    'build/js/bundle.min.js': 'build/js/bundle.js'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['jshint']);
};
