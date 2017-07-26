SystemJS.config({
	baseURL: '/public',
	paths: {
		'tester/': 'tester/',
		'@gongt/image-uploader/': 'self-package/'
	},
	packages: {
		'tester': {
			'main': 'index.js'
		},
		'@gongt/image-uploader': {
			defaultExtension: 'js',
			format: 'cjs',
			main: 'index.js',
		}
	}
});

SystemJS.config({
	packageConfigPaths: [],
	map: {},
	packages: {}
});
