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
	@./node_modules/.bin/jshint ./gulpfile.js --verbose --reporter node_modules/jshint-stylish
	@./node_modules/.bin/jshint ./tasks       --verbose --reporter node_modules/jshint-stylish
	@./node_modules/.bin/jshint ./src/js      --verbose --reporter node_modules/jshint-stylish
	@./node_modules/.bin/jshint ./spec        --verbose --reporter node_modules/jshint-stylish

build: gulpbuild requirejs

gulpbuild:
	gulp build --env=production

requirejs:
	@./node_modules/.bin/r.js -o build-require.js

deploy:
	rsync --delete-after --quiet -rlptuPO --chmod=g+w ./dist/* ${WEB_USER}@${TARGET_HOST}:${TARGET_DIR}
	ssh ${WEB_USER}@${TARGET_HOST} 'cd ${TARGET_DIR}/api && npm install --production && pm2 startOrRestart project-api.json'
