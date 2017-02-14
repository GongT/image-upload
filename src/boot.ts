///<reference path="./globals.d.ts"/>
import "source-map-support/register";
import "@gongt/jenv-data/global";



export const APP_RUN_PORT: number = process.env.LISTEN_PORT || 80;

global['IS_CLIENT'] = false;
global['IS_DEBUG'] = true;

require('./server');
