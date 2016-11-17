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

build.baseImage('node');
build.projectName(projectName);
build.domainName(projectName + '.' + JsonEnv.baseDomainName);

build.install('./package.json');
build.install('./package/package.json');

build.forwardPort(80);

build.startupCommand('dist/boot.js');
build.shellCommand('node');
// build.stopCommand('stop.sh');

// build.buildArgument('SOME_ARG', defaultValue);

build.label('microbuild', 'yes');

build.nsgLabel(ELabelNames.alias, []);

build.addPlugin(EPlugins.jenv);

build.addPlugin(EPlugins.typescript, {
	source: 'src',
	target: 'dist',
});

build.environmentVariable('DEBUG', projectName + ':*');

const cache_host_path = require('path').resolve(__dirname, 'temp-image-upload');
const fs = require('fs');
if (!fs.existsSync(cache_host_path)) {
	fs.mkdirSync(cache_host_path);
}
build.volume(cache_host_path, '/data/temp');
build.environmentVariable('FILE_CACHE_PATH', cache_host_path);

// build.prependDockerFile('/path/to/docker/file');
// build.appendDockerFile('/path/to/docker/file');

if (JsonEnv.isDebug) {
	build.dependService('accounts', 'ssh://git@git.microduino.cn:2222/website-v2/user-center.git');
}

build.buildArgument('user_center_package_url', 'use which user-center package', JsonEnv.accounts.packageUrl);
build.prependDockerFile('install-user-center-package.Dockerfile');
build.appendDockerFile('package/build.Dockerfile');
