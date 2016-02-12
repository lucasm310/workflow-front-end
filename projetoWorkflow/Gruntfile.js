module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
	    autoprefixer: {
	    	dist: {
	    		files: {
	    			'deploy/css/main.css' : 'source/sass/main.css',
	    		}
	    	}

	    },

	    copy: {
	    	dist: {
	    		files: [
	    			{
	    				expand: true, //habilita o cwd
	    				cwd: 'source/',
	    				src: 'vendor/*', 
	    				dest: 'deploy/'
	    			},
	    			{
	    				expand: true,
	    				cwd: 'source/',
	    				src: 'index.html',
	    				dest: 'deploy/'
	    			}
	    		]
	    	}

	   },

	    clean: {
	    	dist: {
	    		src: ["deploy"]
	    	}

	    },

	    cssmin: {
	    	dist: {
	    		files: {
	    			'deploy/css/main.css' : 'deploy/css/main.css'
	    		}
	    	}

	    },

	    uglify: {
	    	options: {
	    		mangle: true
	    	},

	    	dist: {
	    		files: {
	    			'deploy/javascript/app.min.js': [
	    			'source/javascript/incrementButton.js',
	    			'source/javascript/date.js'
	    			]
	    		}
	    	},

	    },

	});

     grunt.loadNpmTasks('grunt-autoprefixer');
     grunt.loadNpmTasks('grunt-contrib-cssmin');
     grunt.loadNpmTasks('grunt-contrib-uglify');
     grunt.loadNpmTasks('grunt-contrib-copy');
     grunt.loadNpmTasks('grunt-contrib-clean');
     
     grunt.registerTask("deploy", ["clean", "autoprefixer", "cssmin", "uglify", "copy"]) 
}