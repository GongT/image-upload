#!/usr/bin/env bash

set -e

# cat << 'RUN_BUNDLE' > /tmp/run.bundle.sh
# library=$1
# echo -e "\n\nCreateing bundle: ${library}"
# jspm bundle ${library} public/bundles/${library}.js --inject
# if [ $? -ne 0 ]; then
# 	echo "Error: failed to bundle dep ${library}" >&2
# 	exit 255
# fi
# RUN_BUNDLE

# xargs -P 1 --no-run-if-empty -I DEP bash /tmp/run.bundle.sh DEP

DEPENDENCY=$(
node <<'SCRIPT_TO_RUN'
const pkg = require('./package.json')
const names = Object.keys(pkg.jspm.dependencies).filter((n) => {
	return n !== 'babel-runtime';
});
process.stdout.write(names.join(' + '));
SCRIPT_TO_RUN
)

EXCLUDE_DEPENDENCY=$(
node <<'SCRIPT_TO_RUN'
const pkg = require('./package.json')
const names = Object.keys(pkg.jspm.dependencies).filter((n) => {
	return n !== 'babel-runtime';
});
process.stdout.write(names.join(' - '));
SCRIPT_TO_RUN
)


jspm unbundle
jspm bundle --minify ${DEPENDENCY[@]} + typescript ./src/dependencies-bundle.js --inject

