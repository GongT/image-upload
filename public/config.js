SystemJS.config({
	baseURL: '/public',
	paths: {
		'tester/': 'tester/',
		'@microduino-private/image-upload-client/': 'self-package/'
	},
	packages: {
		'tester': {
			'main': 'index.js'
		},
		'@microduino-private/image-upload-client': {
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
