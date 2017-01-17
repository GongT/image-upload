///<reference path="./globals.d.ts"/>
import "source-map-support/register";
import "@gongt/jenv-data/global";

export const APP_RUN_PORT: number = process.env.RUN_IN_DOCKER? 80 : JsonEnv.upload.debugPort || 80;

global['IS_CLIENT'] = false;
global['IS_DEBUG'] = true;

require('./server');
