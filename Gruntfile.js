module.exports = function(grunt) {
	
	var pkg = grunt.file.readJSON('package.json');
	pkg.version = pkg.version.split(".");
	var subversion = pkg.version.pop();
	subversion++;
	pkg.version.push(subversion);
	pkg.version = pkg.version.join(".");
	grunt.file.write('package.json', JSON.stringify(pkg, null, 2));
	
	console.log("---------------------------------------");
	console.log("  Building file-input Version "+pkg.version);
	console.log("---------------------------------------");
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		'string-replace': {
			source: {
				files: {
					"file-input.js": "src/file-input.js"
				},
				options: {
					replacements: [{
						pattern: /{{ VERSION }}/g,
						replacement: '<%= pkg.version %>'
					}]
				}
			},
			readme: {
				files: {
					"README.md": "README.md"
				},
				options: {
					replacements: [{
						pattern: /\d*\.\d*\.\d*/g,
						replacement: '<%= pkg.version %>'
					}]
				}
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> */'
			},
			build: {
				src: 'file-input.js',
				dest: 'file-input.min.js'
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-string-replace');
	grunt.loadNpmTasks('grunt-contrib-uglify-es');
	
	grunt.registerTask('default', [
		'string-replace',
		'uglify'
	]);
	
};