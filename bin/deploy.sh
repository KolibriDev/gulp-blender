#!/bin/bash
gulp build --env=production
r.js -o build-require.js
# rsync -azv -O --chmod g+w dist/* path.to.remote.server
