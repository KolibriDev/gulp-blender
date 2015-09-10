#!/bin/bash
r.js -o build-require.js
cat dist/js/main.js | pbcopy
echo "RequireJS optimizer: Copied output to clipboard"
