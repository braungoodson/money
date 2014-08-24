module.exports = function (grunt) {
	grunt.initConfig({
		watch: {
			money: {
				files: ['money.js'],
				tasks: ['execute:money']
			}
		},
		execute: {
			money: {
				src: ['money.js']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-execute');
	grunt.registerTask('default',['watch:money']);
}