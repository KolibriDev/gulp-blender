#!/bin/bash
r.js -o build-require.js
cat dist/js/main.js | pbcopy
gulp notify --title 'RequireJS optimizer' --msg 'Copied output to clipboard'
