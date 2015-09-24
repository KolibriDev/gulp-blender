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
	npm install -g gulp jshint jasmine-node
	npm install --loglevel=error

.PHONY: test, test-build
test: test-build test-project

test-build:
	@./node_modules/.bin/jshint ./gulpfile.js --verbose --reporter node_modules/jshint-stylish
	@./node_modules/.bin/jshint ./tasks --verbose --reporter node_modules/jshint-stylish
	@./node_modules/.bin/jshint ./test-build --verbose --config ./.jshintrc-test --reporter node_modules/jshint-stylish
	@./node_modules/.bin/jasmine-node --test-dir test-build --verbose --color

test-project:
	@./node_modules/.bin/jshint ./src/js --verbose --reporter node_modules/jshint-stylish
	@./node_modules/.bin/jshint ./test --verbose --config ./.jshintrc-test --reporter node_modules/jshint-stylish
	@./node_modules/.bin/jasmine-node --test-dir test --verbose --color

build: gulpbuild requirejs

gulpbuild:
	gulp build --env=production

requirejs:
	@./node_modules/.bin/r.js -o build-require.js

deploy:
	rsync --delete-after --quiet -rlptuPO --chmod=g+w ./dist/* ${WEB_USER}@${TARGET_HOST}:${TARGET_DIR}
