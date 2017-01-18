import {MicroBuildHelper} from "./x/microbuild-helper";
import {MicroBuildConfig, ELabelNames, EPlugins} from "./x/microbuild-config";
import {JsonEnv} from "../.jsonenv/_current_result";
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

build.isInChina(JsonEnv.gfw.isInChina, JsonEnv.gfw);
build.npmCacheLayer(JsonEnv.gfw.npmRegistry);
build.npmInstall('./package.json', ['python', 'make', 'g++']);
build.github(JsonEnv.gfw.github);

build.forwardPort(80);

build.startupCommand('dist/boot.js');
build.shellCommand('node');
// build.stopCommand('stop.sh');

build.specialLabel(ELabelNames.alias, []);

build.addPlugin(EPlugins.jenv);

build.addPlugin(EPlugins.typescript, {
	source: 'src',
	target: 'dist',
});
build.addPlugin(EPlugins.typescript, {
	source: 'package/src',
	target: 'package/dist',
});

build.listenPort(JsonEnv.upload.debugPort);

build.environmentVariable('DEBUG', projectName + ':*');

build.addPlugin(EPlugins.npm_publish, {
	path: './package'
});

build.dockerRunArgument('--dns=${HOST_LOOP_IP}');

build.onConfig((isBuild) => {
	const config = helper.createConfig();
	config.save('package/src/cfg.ts');
	config.save('src/cfg.ts');
});
