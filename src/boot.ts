///<reference path="./globals.d.ts"/>
import "source-map-support/register";
import "@gongt/jenv-data/global";



global['IS_CLIENT'] = false;
global['IS_DEBUG'] = true;

require('./server');
