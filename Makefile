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
	npm install -g gulp jshint
	npm install --loglevel=error

test:
	exit 0

build: gulpbuild requirejs

gulpbuild:
	gulp build --env=production

requirejs:
	r.js -o build-require.js

deploy:
	rsync --delete-after --quiet -rlptuPO --chmod=g+w ./dist/* ${WEB_USER}@${TARGET_HOST}:${TARGET_DIR}
