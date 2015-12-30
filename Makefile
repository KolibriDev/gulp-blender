ifndef WEB_USER
	WEB_USER := www-data
endif

ifndef TARGET_HOST
	TARGET_HOST := localhost
endif

ifndef TARGET_DIR
	TARGET_DIR := /var/www/sitename
endif

all: npm test build deploy

npm:
	npm install --loglevel=error

test: jshint jasmine

jasmine:
	@./node_modules/.bin/jasmine

jshint:
	@./node_modules/.bin/eslint ./gulpfile.js
	@./node_modules/.bin/eslint ./tasks
	@./node_modules/.bin/eslint ./src/js
	@./node_modules/.bin/eslint ./spec

build: gulpbuild requirejs

gulpbuild:
	gulp build --env=production

requirejs:
	@./node_modules/.bin/r.js -o build-require.js

deploy:
	rsync --delete-after --quiet -rlptuPO --chmod=g+w ./dist/* ${WEB_USER}@${TARGET_HOST}:${TARGET_DIR}
	ssh ${WEB_USER}@${TARGET_HOST} 'cd ${TARGET_DIR}/api && npm install --production && pm2 startOrRestart project-api.json'
