module.exports = function(grunt) {
    'use strict';
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Task configuration.
        clean: {
            release: [
                "dist/**/*"
            ]
        },
        less: {
            release: {
                files: {
                    'dist/<%= pkg.name %>.css' : 'less/init.less'
                }
            }
        },
        cssmin: {
            options: {
                compatibility: 'ie8',
                keepSpecialComments: 0,
                noAdvanced: true
            },
            minify: {
                src: 'dist/<%= pkg.name %>.css',
                dest: 'dist/<%= pkg.name %>.min.css'
            }
        },
        watch: {
            less: {
                files: ['less/**/*.less'],
                tasks: ['less']
            },
            css: {
                files: ['dist/<%= pkg.name %>.css', 'docs/**/*.css','pages/**/*.css'],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
            html: {
                files: ['docs/**/*.html', 'pages/**/*.html'],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            }
        },
        connect: {
            options: {
                port: 9001,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },
            default: {
                options: {
                    middleware: function (connect) {
                        return [
                            connect().use('/bower_components', connect.static('./bower_components')),
                            connect().use('/dist', connect.static('./dist')),
                            connect().use('/pages', connect.static('./pages')),
                            connect.static('docs')
                        ];
                    }
                }
            }
        },
        assemble: {
            options: {
                assets: 'assets',
                // metadata
                data: ['data/*.{json,yml}'],

                // templates
                partials: ['templates/includes/*.hbs'],
                layout: ['templates/layouts/default.hbs'],

                // extensions
                middlweare: ['assemble-middleware-permalinks'],
            },
            // This is really all you need!
            pages: {
                src: ['docs/*.hbs'],
                dest: './'
            }
        }
    });


    // loading all 'grunt-*' tasks and dev dependencies
    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

    grunt.registerTask("default", ["clean","less","connect", "watch"]);
    grunt.registerTask("test", ["clean","less","cssmin"]);
};
