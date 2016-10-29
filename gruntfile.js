module.exports = function(grunt) {
	//load plugins
	[
		'grunt-cafe-mocha', 
		'grunt-contrib-jshint', 
		'grunt-exec',
	].forEach(function(task){
		grunt.loadNpmTask(task); 
	}); 

	//configure plugin 
	grunt.initConfig({
		cafemocha: {
			all: {src: 'qa/tests-*.js', options: {ui: 'tdd'}, }
		}, 
		jshint: {
			app: ['meadowlark.js', 'public/js/**/*.js', 'lib/**/*.js'], 
			qa: ['gruntfile.js', 'public/qa/**/*.js', 'qa/**/*.js'],
		}, 
		exec: {
			linkchecker: {cmd: 'linkchecker --ignore-url=\'!^https?:)\/\/localhost\b\' http://localhost:3000'}
		}, 
	}); 

	//register tasks 
	grunt.registerTask('default', ['cafemocha', 'jshint', 'exec']);
};