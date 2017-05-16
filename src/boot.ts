/// <reference path="./globals.d.ts"/>

import "source-map-support/register";
import "@gongt/jenv-data/global";

import {initDefaultDatabaseConnection} from "@gongt/ts-stl-server/database/mongodb";
export const defaultDatabaseConnectionString = JsonEnv.DataBaseUrlTemplate.replace('%DATABASE-NAME%', 'DefaultDatabase');
initDefaultDatabaseConnection(defaultDatabaseConnectionString);

global['IS_CLIENT'] = false;
global['IS_DEBUG'] = true;

require('./server');
