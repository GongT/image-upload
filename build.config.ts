import {MicroBuildHelper} from "./.micro-build/x/microbuild-helper";
import {MicroBuildConfig, ELabelNames, EPlugins} from "./.micro-build/x/microbuild-config";
import {JsonEnv} from "./.jsonenv/_current_result";
declare const build: MicroBuildConfig;
declare const helper: MicroBuildHelper;
/*
 +==================================+
 | <**DON'T EDIT ABOVE THIS LINE**> |
 | THIS IS A PLAIN JAVASCRIPT FILE  |
 |   NOT A TYPESCRIPT OR ES6 FILE   |
 |    ES6 FEATURES NOT AVAILABLE    |
 +==================================+
 */

const projectName = 'image-upload';

build.baseImage('node', 'alpine');
build.projectName(projectName);
build.domainName(projectName + '.' + JsonEnv.baseDomainName);

build.systemdType('notify');
build.systemdWatchdog(10);

build.forceLocalDns();
build.isInChina(JsonEnv.gfw.isInChina, JsonEnv.gfw);
build.npmCacheLayer(JsonEnv.gfw.npmRegistry);
build.npmInstall('./package.json', ['git', 'python', 'make', 'g++']);
build.github(JsonEnv.gfw.github);

build.forwardPort(80);

build.startupCommand('dist/server/boot.js');
build.shellCommand('node');
// build.stopCommand('stop.sh');

build.specialLabel(ELabelNames.alias, []);

build.addPlugin(EPlugins.jenv);

build.addPlugin(EPlugins.typescript, {
	source: 'src/server',
	target: 'dist',
});
build.addPlugin(EPlugins.typescript, {
	source: 'src/package',
	target: 'dist/npm-package',
});
build.addPlugin(EPlugins.typescript, {
	source: 'src/simple-test-pages',
	target: 'dist/client',
});

build.listenPort(JsonEnv.upload.debugPort);

build.environmentVariable('DEBUG', projectName + ':*');

build.addPlugin(EPlugins.npm_publish, {
	copy: {
		"src/package/package.json": "dist/npm-package/package.json",
	},
	path: './dist/npm-package',
});

build.onConfig((isBuild) => {
	const config = helper.createConfig();
	config.save('src/package/cfg.ts');
	config.save('src/server/cfg.ts');
});
