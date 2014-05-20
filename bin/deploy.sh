#!/bin/bash
gulp build --prod
r.js -o build-require.js
# rsync -azv -O --chmod g+w dist/* path.to.remote.server
