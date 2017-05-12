/// <reference path="./globals.d.ts"/>

import "source-map-support/register";
import "@gongt/jenv-data/global";

import {initDefaultDatabaseConnection} from "typescript-common-library/server/database/mongodb";
export const defaultDatabaseConnectionString = JsonEnv.DataBaseUrlTemplate.replace('%DATABASE-NAME%', 'DefaultDatabase');
initDefaultDatabaseConnection(defaultDatabaseConnectionString);

global['IS_CLIENT'] = false;
global['IS_DEBUG'] = true;

require('./server');
