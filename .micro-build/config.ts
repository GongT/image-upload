import {MicroBuildConfig, ELabelNames, EPlugins} from "./x/microbuild-config";
import {JsonEnv} from "../.jsonenv/_current_result.json.d.ts";
declare const build: MicroBuildConfig;
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
build.npmInstall('./package/package.json');
build.github(JsonEnv.gfw.github);
build.jspmInstall('./package/package.json');

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

build.environmentVariable('DEBUG', projectName + ':*');

// const cache_host_path = require('path').resolve(__dirname, 'temp-image-upload');
// const fs = require('fs');
// if (!fs.existsSync(cache_host_path)) {
// 	fs.mkdirSync(cache_host_path);
// }
// build.volume(cache_host_path, '/data/temp');
// build.environmentVariable('FILE_CACHE_PATH', cache_host_path);

build.appendDockerFile('package/build.Dockerfile');

build.dockerRunArgument('--dns=${HOST_LOOP_IP}');
