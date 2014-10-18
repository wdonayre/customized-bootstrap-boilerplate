module.exports = function(grunt) {
    'use strict';
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Task configuration.
        clean: {
            dist: 'build'
        },
        less: {
            dev: {
                files: {
                    'develop/css/<%= pkg.name %>.css' : 'less/init.less',
                    'develop/css/<%= pkg.name %>-theme.css' : 'less/theme.less'
                }
            },
            prod:{
                files: {
                    'production/css/<%= pkg.name %>.css' : 'less/init.less',
                    'production/css/<%= pkg.name %>-theme.css' : 'less/theme.less'
                }
            }
        },
        cssmin: {
            options: {
                compatibility: 'ie8',
                keepSpecialComments: '*',
                noAdvanced: true
            },
            minifyCore: {
                src: 'production/css/<%= pkg.name %>.css',
                dest: 'production/css/<%= pkg.name %>.min.css'
            },
            minifyTheme: {
                src: 'production/css/<%= pkg.name %>-theme.css',
                dest: 'production/css/<%= pkg.name %>-theme.min.css'
            }
        }
    });



    // loading all 'grunt-*' tasks and dev dependencies
    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

    grunt.registerTask("default", ["clean","less:dev","file-creator:dev"]);
    grunt.registerTask("dev", function(){
        var pkg = grunt.file.readJSON('package.json');
        grunt.file.write('examples/st.css', "@import url(\"../develop/css/"+ pkg.name+".css\");\r\n@import url(\"../develop/css/"+ pkg.name+"-theme.css\");");
        grunt.task.run("clean","less:dev");
    });

   // grunt.registerTask("prod", ["clean","less:prod","cssmin"]);
    grunt.registerTask("prod", function(){
        var pkg = grunt.file.readJSON('package.json');
        grunt.file.write('examples/st.css', "@import url(\"../production/css/"+ pkg.name+".css\");\r\n@import url(\"../production/css/"+ pkg.name+"-theme.css\");");
        grunt.task.run("clean","less:prod","cssmin");
    });
};