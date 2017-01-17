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

build.environmentVariable('DEBUG', projectName + ':*');

build.addPlugin(EPlugins.npm_publish, {
	path: './package'
});

build.dockerRunArgument('--dns=${HOST_LOOP_IP}');

build.onConfig(() => {
	const httpBaseDomain = JsonEnv.upload.requestUrl.replace(/^https/, 'http');
	const httpsBaseDomain = JsonEnv.isDebug? httpBaseDomain : JsonEnv.upload.requestUrl.replace(/^http/, 'https');
	const fs = require('fs');
	const path = require('path');
	fs.writeFileSync(path.resolve(__dirname, '../package/src/config.ts'), `
let base;
if(typeof window === 'object'){
	base = ${JSON.stringify(httpBaseDomain)};
} else {
	base = ${JSON.stringify(httpsBaseDomain)};
}
export const RequestBaseDomain = base;
`, 'utf-8');
});
