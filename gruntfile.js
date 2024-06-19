module.exports = function(grunt){
    //configure tasks
    grunt.initConfig({
        //specify tasks
        uglify:{
            target:{
                files:{
                    "dest/js/main.min.js":["src/js/*.js"]
                }
            }
        },

        cssmin:{
            target:{
                files:[
                    {
                        cwd:"src/css",      //current working directory
                        src:["*.css", "!*.min.css"],
                        dest:"dest/css",
                        ext:".min.css"  //extension
                    }
                ]
            }
        }
    })

    // Load libraries
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // setting up tasks
    grunt.registerTask('default', ['uglify']);

}



