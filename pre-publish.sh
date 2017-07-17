#!/usr/bin/env bash

set -e
set -x

tsc -p src/server
tsc -p src/package
tsc -p src/simple-test-pages
tsc -p src/package/tsconfig.es5.json
unlink dist/npm-package/package.json || true
cp src/package/package.json dist/npm-package/package.json
cd dist/npm-package
# npm publish --access=public
